import { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { firebaseConfig } from "../shared/firebaseConfig";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig as any);
const auth = getAuth(app);

export default function Auth() {
	const recaptchaRef = useRef<FirebaseRecaptchaVerifierModal>(null);
	const [phone, setPhone] = useState<string>("+91");
	const [verificationId, setVerificationId] = useState<string | null>(null);
	const [code, setCode] = useState<string>("");
	const [status, setStatus] = useState<string>("");

	const send = async () => {
		try {
			const provider = new PhoneAuthProvider(auth);
			const vid = await provider.verifyPhoneNumber(phone, recaptchaRef.current as any);
			setVerificationId(vid);
			setStatus("OTP sent.");
		} catch (e: any) {
			setStatus(e?.message || 'Failed to send');
		}
	};
	const verify = async () => {
		try {
			if (!verificationId) return;
			const credential = PhoneAuthProvider.credential(verificationId, code);
			await signInWithCredential(auth, credential);
			setStatus("Authenticated.");
		} catch (e: any) {
			setStatus(e?.message || 'Invalid code');
		}
	};

	return (
		<View style={{ padding: 16 }}>
			<FirebaseRecaptchaVerifierModal ref={recaptchaRef} firebaseConfig={firebaseConfig as any} />
			<Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>OTP</Text>
			<TextInput value={phone} onChangeText={setPhone} placeholder="Phone (+91...)" style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 6, padding: 10, marginBottom: 8 }} />
			{!verificationId ? (
				<TouchableOpacity onPress={send} style={{ backgroundColor: '#16a34a', padding: 12, borderRadius: 6, marginBottom: 8 }}><Text style={{ color: '#fff', textAlign: 'center' }}>Send OTP</Text></TouchableOpacity>
			) : (
				<View>
					<TextInput value={code} onChangeText={setCode} placeholder="Enter code" style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 6, padding: 10, marginBottom: 8 }} />
					<TouchableOpacity onPress={verify} style={{ backgroundColor: '#f59e0b', padding: 12, borderRadius: 6 }}><Text style={{ textAlign: 'center' }}>Verify</Text></TouchableOpacity>
				</View>
			)}
			{status ? <Text style={{ marginTop: 8 }}>{status}</Text> : null}
		</View>
	);
}
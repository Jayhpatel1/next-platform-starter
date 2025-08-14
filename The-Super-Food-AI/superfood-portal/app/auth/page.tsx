"use client";
import { useState, useEffect } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { DEFAULT_COUNTRY_CODE } from "../../../shared/utils/firebaseConfig";

export default function AuthPage() {
	const [phone, setPhone] = useState<string>(DEFAULT_COUNTRY_CODE);
	const [code, setCode] = useState<string>("");
	const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);
	const [status, setStatus] = useState<string>("");
	const [userPhone, setUserPhone] = useState<string | null>(null);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (u) => setUserPhone(u?.phoneNumber ?? null));
		return () => unsub();
	}, []);

	const handleSend = async () => {
		try {
			// @ts-ignore
			window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
			const result = await signInWithPhoneNumber(auth, phone, (window as any).recaptchaVerifier);
			setConfirmation(result);
			setStatus("OTP sent.");
		} catch (e: any) {
			setStatus(e?.message || "Failed to send OTP");
		}
	};

	const handleVerify = async () => {
		if (!confirmation) return;
		try {
			await confirmation.confirm(code);
			setStatus("Authenticated.");
		} catch (e: any) {
			setStatus(e?.message || "Invalid code");
		}
	};

	return (
		<div className="mx-auto max-w-md px-4 py-8">
			<h2 className="text-2xl font-semibold mb-3">OTP Sign In</h2>
			<div id="recaptcha-container" />
			{userPhone ? (
				<div className="space-y-3">
					<p className="opacity-90">Signed in as {userPhone}</p>
					<button onClick={() => signOut(auth)} className="bg-white/10 rounded px-4 py-2">Sign out</button>
				</div>
			) : (
				<div className="space-y-3">
					<label className="block text-sm opacity-80" htmlFor="phone">Phone</label>
					<input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (+91...)" className="w-full bg-white/10 rounded px-3 py-2" />
					{!confirmation ? (
						<button onClick={handleSend} className="bg-verdant text-white rounded px-4 py-2">Send OTP</button>
					) : (
						<div className="space-y-2">
							<label className="block text-sm opacity-80" htmlFor="code">Code</label>
							<input id="code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" className="w-full bg-white/10 rounded px-3 py-2" />
							<button onClick={handleVerify} className="bg-citrus text-black rounded px-4 py-2">Verify</button>
						</div>
					)}
					{status && <p className="text-sm opacity-90">{status}</p>}
				</div>
			)}
		</div>
	);
}
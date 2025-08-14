import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function PhoneAuth() {
	const [phone, setPhone] = useState('+91');
	const [otp, setOtp] = useState('');
	const [signedIn, setSignedIn] = useState(false);
	return (
		<View style={{ gap: 8 }}>
			<Text style={{ color: 'white' }}>Phone (India default)</Text>
			<TextInput value={phone} onChangeText={setPhone} placeholder="+91 9XXXXXXXXX" placeholderTextColor="#9ca3af" style={{ borderWidth: 1, borderColor: '#14532d', color: 'white', padding: 10, borderRadius: 6 }} />
			<Pressable onPress={() => {}} style={{ backgroundColor: '#16a34a', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 6 }}>
				<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Send OTP</Text>
			</Pressable>
			<View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
				<TextInput value={otp} onChangeText={setOtp} placeholder="Enter OTP (demo 123456)" placeholderTextColor="#9ca3af" style={{ flex: 1, borderWidth: 1, borderColor: '#14532d', color: 'white', padding: 10, borderRadius: 6 }} />
				<Pressable onPress={() => setSignedIn(true)} style={{ backgroundColor: '#16a34a', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 6 }}>
					<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Verify</Text>
				</Pressable>
			</View>
			{signedIn && <Text style={{ color: 'white' }}>Signed in (demo)</Text>}
		</View>
	);
}
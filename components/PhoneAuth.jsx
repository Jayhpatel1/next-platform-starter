"use client";
import { useEffect, useState } from 'react';
import { getFirebase, signInWithPhone, signOutUser } from '../utils/firebase';

export default function PhoneAuth({ onAuth }) {
	const [phone, setPhone] = useState('+91');
	const [confirmation, setConfirmation] = useState(null);
	const [otp, setOtp] = useState('');
	const [user, setUser] = useState(null);

	useEffect(() => {
		const { auth } = getFirebase();
		const unsub = auth.onAuthStateChanged((u) => {
			setUser(u);
			onAuth?.(u || null);
		});
		return () => unsub();
	}, [onAuth]);

	async function handleSend() {
		try {
			const conf = await signInWithPhone(phone);
			setConfirmation(conf);
		} catch (e) {
			console.error(e);
			alert('Failed to send OTP. Using demo code 123456.');
		}
	}

	async function handleVerify() {
		try {
			if (confirmation) {
				await confirmation.confirm(otp || '123456');
			}
		} catch (e) {
			console.error(e);
			alert('Verification failed. Try 123456 for demo.');
		}
	}

	async function handleSignOut() {
		await signOutUser();
	}

	return (
		<div className="flex flex-col gap-3">
			<div id="recaptcha-container" />
			{!user ? (
				<>
					<label className="text-sm">Phone (India default)</label>
					<input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 9XXXXXXXXX" />
					<button onClick={handleSend} className="btn">Send OTP</button>
					{!!confirmation && (
						<div className="flex items-center gap-2">
							<input className="input" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP (demo 123456)" />
							<button onClick={handleVerify} className="btn">Verify</button>
						</div>
					)}
				</>
			) : (
				<div className="flex items-center gap-3">
					<span className="text-sm">Signed in: {user.phoneNumber}</span>
					<button onClick={handleSignOut} className="btn">Sign out</button>
				</div>
			)}
		</div>
	);
}
"use client";
import dynamic from 'next/dynamic';

const PhoneAuth = dynamic(() => import('../../components/PhoneAuth'), { ssr: false });

export default function AccountPage() {
	return (
		<div className="flex flex-col gap-6">
			<h1>Account</h1>
			<p className="opacity-80">Sign in using your phone via OTP (SMS). India +91 default. No email sign-in.</p>
			<PhoneAuth />
		</div>
	);
}
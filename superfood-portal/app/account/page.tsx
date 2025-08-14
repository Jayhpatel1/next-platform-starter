import Link from "next/link";

export default function AccountPage() {
	return (
		<div className="mx-auto max-w-md px-4 py-8">
			<h2 className="text-2xl font-semibold mb-2">Account</h2>
			<p className="opacity-80 mb-4">Sign in with your phone to access your personalized control panel.</p>
			<div className="border border-white/10 rounded p-4">
				<p className="text-sm opacity-90 mb-2">Use the OTP flow to authenticate.</p>
				<Link href="/auth" className="bg-verdant text-white rounded px-4 py-2 inline-block">Continue to OTP</Link>
			</div>
		</div>
	);
}
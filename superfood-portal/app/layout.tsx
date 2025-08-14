import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./(components)/ThemeToggle";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "The Super Food AI",
	description: "Super Food for Super Humans — Tailored nourishment for wellness goals.",
	metadataBase: new URL("https://superfood-ai.example.com"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<header className="w-full border-b border-white/10">
						<nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
							<Link href="/" className="text-xl font-semibold">
								<span className="verdant">The Super Food AI</span>
							</Link>
							<div className="flex items-center gap-4 text-sm">
								<Link href="/catalog" className="hover:underline">Catalog</Link>
								<Link href="/procure" className="hover:underline">Procure</Link>
								<Link href="/control" className="hover:underline">Control</Link>
								<Link href="/account" className="hover:underline">Account</Link>
								<ThemeToggle />
							</div>
						</nav>
					</header>
					<main className="flex-1">{children}</main>
					<footer className="w-full border-t border-white/10">
						<div className="mx-auto max-w-6xl p-4 text-sm flex flex-col sm:flex-row items-center justify-between">
							<p>Super Food for Super Humans · Bhavnagar, India</p>
							<p>Hotline: <a href="tel:+919773081099" className="citrus">+91 97730 81099</a></p>
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}

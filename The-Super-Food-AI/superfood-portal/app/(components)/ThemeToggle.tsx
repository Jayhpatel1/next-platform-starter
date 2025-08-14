"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	return (
		<button
			aria-label="Toggle theme"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="rounded px-3 py-1 bg-white/10 text-sm"
		>
			{theme === "dark" ? "Light" : "Dark"}
		</button>
	);
}
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<>
			{currentTheme === "dark" ? (
				<button
					className="bg-black-700 hover:bg-black w-10 rounded-md   p-1"
					onClick={() => setTheme("light")}
				>
					<SunIcon />
				</button>
			) : (
				<button
					className="bg-gray-100 w-10 rounded-md p-1 hover:bg-gray-300"
					onClick={() => setTheme("dark")}
				>
					<MoonIcon />
				</button>
			)}
		</>
	);
}

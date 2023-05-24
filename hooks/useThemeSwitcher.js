import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
	const [mode, setMode] = useState("light");

	const preferDarkQuery = "(prefer-color-scheme: dark)";

	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery);
		const userPref = window.localStorage.getItem("theme");

		const handleThemeChange = () => {
			if (userPref) {
				let check = userPref === "dark" ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			} else {
				let check = mediaQuery.matches ? "dark" : "light";
				setMode(check);

				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}
		};

		mediaQuery.addEventListener("change", handleThemeChange);

		return () => mediaQuery.removeEventListener("change", handleThemeChange);
	}, []);

	useEffect(() => {
		if (mode === "dark") {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	return [mode, setMode];
}

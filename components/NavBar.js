"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

function NavBar() {
	const [mode, setMode] = useThemeSwitcher();

	return (
		<header className="fixed z-50 flex items-center backdrop-blur-lg  justify-between w-full px-32 py-8 font-medium border-b text-white">
			<Logo />
			<nav>
				<Link className="px-4" href="/">
					Home
				</Link>
				<Link className="px-4" href="/projects">
					Projects
				</Link>
				<Link className="px-4" href="/services">
					Services
				</Link>
				<Link className="px-4" href="/contact">
					Contact
				</Link>
				<button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
					{mode === "dark" ? (
						<SunIcon className={"fill-dark"} />
					) : (
						<MoonIcon className={"fill-dark"} />
					)}
				</button>
			</nav>
		</header>
	);
}

export default NavBar;

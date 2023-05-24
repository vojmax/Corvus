"use client";

import Link from "next/link";
import React from "react";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

function NavBar() {
	const [mode, setMode] = useThemeSwitcher();

	return (
		<header className="fixed z-50 flex  backdrop-blur-lg  justify-between w-full px-32 py-8 font-medium border-b border-b-neutral-600 text-dark dark:text-light ">
			<Link href="/" className="flex items-center">
				<span className="ml-3 text-2xl font-bold">corvus</span>
				<span className="text-secondaryHighlight text-2xl font-bold dark:text-highlight">
					.
				</span>
				<span className=" text-2xl font-normal">design</span>
			</Link>
			<nav className="flex flex-row items-center ">
				<Link className="px-4 " href="/">
					Home
				</Link>
				<Link className="px-4 " href="/projects">
					Projects
				</Link>
				<Link className="px-4" href="/services">
					Services
				</Link>
				<Link className="px-4" href="/contact">
					Contact
				</Link>
				<button
					className="ml-3 bg-gray-500 bg-opacity-30  items-center justify-center rounded-full p-1"
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
				>
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

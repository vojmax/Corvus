"use client";

import Link from "next/link";
import React from "react";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";
import CustomLink from "./CustomLink";

function NavBar() {
	const [mode, setMode] = useThemeSwitcher();

	return (
		<header className="fixed z-50 flex  backdrop-blur-lg  justify-between w-full px-32 py-8 font-medium border-b border-b-neutral-600  ">
			<Link href="/" className="flex items-center text-dark dark:text-light">
				<span className=" text-2xl font-bold">corvus</span>
				<span className="text-highlight text-2xl font-bold ">.</span>
				<span className=" text-2xl font-normal">design</span>
			</Link>
			<nav className="flex flex-row items-center text-dark dark:text-light">
				<CustomLink href="/" title="Home" />
				<CustomLink href="/projects" title="Projects" />
				<CustomLink href="/services" title="Services" />
				<CustomLink href="/contact" title="Contact" />
			</nav>
			<button
				className=" bg-gray-500 bg-opacity-30  items-center justify-center rounded-full p-1.5 "
				onClick={() => setMode(mode === "light" ? "dark" : "light")}
			>
				{mode === "dark" ? <SunIcon /> : <MoonIcon />}
			</button>
		</header>
	);
}

export default NavBar;

import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function NavBar() {
	return (
		<header className="flex items-center justify-between w-full px-32 py-8 font-medium">
			<Logo />
			<nav>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/services">Services</Link>
				<Link href="/contact">Contact</Link>
			</nav>
		</header>
	);
}

export default NavBar;

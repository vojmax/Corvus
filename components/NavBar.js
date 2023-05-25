"use client";

import CustomLink from "./CustomLink";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

function NavBar() {
	return (
		<header className="fixed z-50 flex  backdrop-blur-lg  justify-between w-full px-32 py-8 font-medium border-b border-b-neutral-600  ">
			<Logo />
			<nav className="flex flex-row items-center text-dark dark:text-light">
				<CustomLink href="/" title="Home" />
				<CustomLink href="/projects" title="Projects" />
				<CustomLink href="/services" title="Services" />
				<CustomLink href="/contact" title="Contact" />
				<ThemeButton />
			</nav>
		</header>
	);
}

export default NavBar;

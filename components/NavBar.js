"use client";

import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import ScrollLink from "./ScrollLink";

function NavBar() {
	return (
		<header className="fixed z-50 flex  backdrop-blur-lg  justify-between w-full px-32 py-8 font-medium border-b border-b-neutral-600  ">
			<Logo />
			<nav className="flex flex-row items-center text-dark dark:text-light">
				<ScrollLink title="Home" href="#home" />
				<ScrollLink title="Projects" href="#projects" />
				<ScrollLink title="Services" href="#services" />
				<ScrollLink title="Contact" href="#contact" />
				<ThemeButton />
			</nav>
		</header>
	);
}

export default NavBar;

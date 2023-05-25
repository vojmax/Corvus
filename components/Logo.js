import Link from "next/link";
import React from "react";

function Logo() {
	return (
		<Link href="/" className="flex items-center text-dark dark:text-light">
			<span className=" text-2xl font-bold">corvus</span>
			<span className="text-highlight text-2xl font-bold ">.</span>
			<span className=" text-2xl font-normal">design</span>
		</Link>
	);
}

export default Logo;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
	return (
		<Link href="/" className="flex   w-16 h-16 bg-transparent">
			<Image src="/icon.svg" aria-label="Corvus logo" width={46} height={46} />
		</Link>
	);
}

export default Logo;

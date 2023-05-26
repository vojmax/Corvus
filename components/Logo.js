import React from "react";
import ScrollLink from "./ScrollLink";

function Logo() {
	return (
		<ScrollLink
			href="#home"
			className="flex items-center text-dark dark:text-light"
			title={
				<>
					<span className=" text-2xl font-bold">VM</span>
					<span className="text-highlight text-2xl font-bold ">.</span>
					<span className=" text-2xl font-normal">design</span>
				</>
			}
		/>
	);
}

export default Logo;

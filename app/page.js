"use client";

import { useTypingText } from "@/hooks/useTypingText";

function Home() {
	const { word, stop, start } = useTypingText(
		["logo?", "branding?", "UI/UX?", "website?", "SEO?"],
		140,
		30
	);

	return (
		<>
			<section
				id="home"
				className="flex h-screen bg-light text-center justify-center items-center  dark:bg-dark dark:text-light "
			>
				<h1 className="text-slate-900 font-extrabold text-8xl  tracking-tight text-left dark:text-white">
					Do you need a {word}
					<span></span>
				</h1>
			</section>
		</>
	);
}

export default Home;

import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Image
				className="opacity-80"
				src="/bg-image.jpg"
				width={2000}
				height={1300}
				alt="backdrop"
			/>
		</main>
	);
}

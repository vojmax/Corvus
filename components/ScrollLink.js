import Link from "next/link";

const ScrollLink = ({ title, ...props }) => {
	const handleScroll = (e) => {
		e.preventDefault();
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<Link
			className="bg-black-700 hover:bg-gray-300 rounded-md py-2 px-4 dark:hover:bg-black"
			{...props}
			onClick={handleScroll}
		>
			{title}
		</Link>
	);
};
export default ScrollLink;

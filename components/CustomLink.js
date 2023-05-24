import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ href, title, className }) {
	const path = usePathname();

	return (
		<Link href={href} className={`mr-8 relative group ${className}`}>
			{title}
			<span
				className={`h-[2px] w-0 inline-block transition-[width] group-hover:w-full ease duration-200 bg-highlight absolute left-0 -bottom-1 ${
					path === href ? "w-full" : "w-0"
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
}

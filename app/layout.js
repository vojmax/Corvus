import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContext from "@/Context/ThemeProvider";
import Home from "./page";
import Projects from "./projects/page";
import Services from "./services/page";
import Contact from "./contact/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
	title: "Vojislav Maksovic",
	description: "Home of the Corvus web design and development ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} h-full w-full`}>
				<ThemeContext>
					<NavBar />
					<Home />
					<Projects />
					<Services />
					<Contact />
					<Footer />
				</ThemeContext>
			</body>
		</html>
	);
}

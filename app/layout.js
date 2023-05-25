import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContext from "@/Context/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
	title: "CorvusDesign",
	description: "Home of the Corvus web design and development ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} h-full w-full`}>
				<ThemeContext>
					<NavBar />
					{children}
					<Footer />
				</ThemeContext>
			</body>
		</html>
	);
}

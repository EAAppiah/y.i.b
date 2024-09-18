import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Y.I.B- Youth in Business",
	description: "Welcome to Our Property Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

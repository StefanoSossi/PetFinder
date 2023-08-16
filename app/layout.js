import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pet Finder",
	description: "Find all our beloved pets ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

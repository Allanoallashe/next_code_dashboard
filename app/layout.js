/** @format */

import Head from "next/head";
import "./globals.css";

export const metadata = {
	title: "Dashboard",
	description: "built by @AllanoallasheDev",
	icons: {
		icon: [
			{
				rel: "icon",
				url: "./ui/assets/pic1.jpg",
				sizes: "32x32",
				typeof: "image/x-icon",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}

/** @format */

import Header from "@/app/dashboard/page";
import "./globals.css";

export const metadata = {
	title: "Dashboard",
	description: "built by @AllanoallasheDev",
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

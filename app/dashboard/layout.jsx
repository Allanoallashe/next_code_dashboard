/** @format */

import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import "../globals.css";

export default function layout({ children }) {
	return (
		<div className="dashboard-container">
			<div className="sidebar">
				<Sidebar />
			</div>
			<main className="dashboard-main">
				<div className="navbar">
					<Navbar />
				</div>
				<div className="dashboard-children">{children}</div>
			</main>
		</div>
	);
}

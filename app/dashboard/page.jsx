/** @format */
import Image from "next/image";
import "../globals.css";
import "./dashboard.css";

import { IoIosInfinite, IoIosAdd } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";

import image1 from "../ui/assets/pic5.jpg";
import image2 from "../ui/assets/pic1.jpg";
import image3 from "../ui/assets/pic3.jpg";

function Dashboard() {
	return (
		<div className="dashboard_page">
			<nav className="status_bar_nav">
				<div>
					<div className="add">
						<IoIosAdd
							style={{
								backgroundColor: "#fbfbfb",
								borderRadius: "50%",
								height: "26px",
								width: "26px",
							}}
						/>
					</div>
					<span className="span_profile">
						<Image
							src={image1}
							alt="image"
							width={26}
							height={26}
						/>
						Armin A.
					</span>
					<span className="span_profile">
						<Image
							src={image2}
							width={26}
							height={26}
							alt="image"
						/>
						Eren Y.
					</span>
					<span className="span_profile">
						<Image
							src={image3}
							width={26}
							height={26}
							alt="image"
						/>
						Mikaso A
					</span>
					<div className="span_logo">
						<span>C</span>
					</div>
				</div>
				<div className="nav_action_icons">
					<IoIosInfinite className="single_nav_action_icons" />
					<MdOutlineFileDownload className="single_nav_action_icons" />
					<HiOutlineUpload className="single_nav_action_icons" />
				</div>
			</nav>
			<div>Dashboard page</div>
		</div>
	);
}

export default Dashboard;

/** @format */
import "./sidebar.css";
import { IoIosArrowDown, IoIosAdd } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { TbShape2 } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { RiShapeLine } from "react-icons/ri";
import {
	IoChatbubblesSharp,
	IoSettingsSharp,
	IoCopyOutline,
} from "react-icons/io5";
import { CiStar, CiUndo } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";

function Sidebar() {
	return (
		<>
			<div className="side_bar">
				<div className="bar_icons">
					<span>C</span>
					<div className="icons">
						<div className="mid_icons">
							<TbShape2 className="each_mid_icon" />
							<MdSpaceDashboard className="each_mid_icon icon_active" />
							<GiNotebook className="each_mid_icon" />
							<RiShapeLine className="each_mid_icon" />
							<IoCopyOutline className="each_mid_icon" />
						</div>
						<div className="last_icons">
							<IoChatbubblesSharp className="each_last_icon" />
							<IoSettingsSharp className="each_last_icon" />
						</div>
					</div>
				</div>
				<div className="bar_icons_text">
					<section>
						Codename.com <IoIosArrowDown />
					</section>
					<div className="side_text">
						<div className="side_taxt_one">
							<small
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
									opacity: 0.7,
									fontSize: "12px",
								}}>
								<CiStar />
								Starred
							</small>
							<small
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
									opacity: 0.7,
									fontSize: "12px",
								}}>
								<CiUndo />
								Recent
							</small>
							<p>Sales List</p>
							<p>Goals</p>
						</div>
						<div className="dashboard_accordion">
							<p>
								Dashboard
								<IoIosAdd
									style={{
										backgroundColor: "#fbfbfb",
										padding: 3,
										borderRadius: "50%",
									}}
								/>
							</p>
						</div>
						<div className="reports_accordion">
							<p>
								Reports{" "}
								<IoIosAdd
									style={{
										backgroundColor: "#fbfbfb",
										padding: 3,
										borderRadius: "50%",
									}}
								/>
							</p>
						</div>
						<div className="folders">
							<FaRegFolderOpen /> Manage Folders
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;

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
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

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
							<span className="chat_notification">
								<IoChatbubblesSharp className="chat_icon" />
								<span>0</span>
							</span>
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
									opacity: 0.6,
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
									opacity: 0.6,
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
							<div className="dashboard_accordion_group">
								<span>
									<hr></hr> Codename
								</span>
								<span>
									<hr></hr>
									<span className="accordion_toggle_span">
										shared with me <MdOutlineKeyboardArrowUp />
									</span>
								</span>
								<div className="test2">
									<span className="accordion_small_section3">
										<small>
											<hr></hr> Cargo2go
										</small>
										<small style={{ width: "100%" }}>
											{" "}
											<hr></hr>
											<span className="accordion_notification">
												Cloudz3r
												<span>3</span>
											</span>
										</small>
										<small>
											{" "}
											<hr></hr> Idioma
										</small>
										<small>
											<hr></hr> Syllables
										</small>
										<small>
											<hr></hr> X-Ob
										</small>
									</span>
								</div>
							</div>
						</div>
						<div className="reports_accordion">
							<p>
								Reports
								<IoIosAdd
									style={{
										backgroundColor: "#fbfbfb",
										padding: 3,
										borderRadius: "50%",
									}}
								/>
							</p>
							<div className="dashboard_accordion_group">
								<span>
									<hr></hr>{" "}
									<span className="accordion_toggle_span">
										share with me <MdOutlineKeyboardArrowUp />
									</span>
								</span>
								<div className="test3">
									<span className="accordion_small_section3">
										<small>
											<hr></hr> Deals by User
										</small>
										<small>
											<hr></hr> Deal Duration
										</small>
									</span>
								</div>
								<span>
									<hr></hr>{" "}
									<span
										style={{ marginTop: 5 }}
										className="accordion_toggle_span">
										My Reports <MdOutlineKeyboardArrowUp />
									</span>
								</span>
								<div className="test4">
									<span className="accordion_small_section4">
										<small>
											<hr></hr>Emails Received
										</small>
										<small>
											<hr></hr>Deal Duration
										</small>
										<small style={{ color: "#ce325a" }}>
											<hr></hr>New Reports
										</small>
										<small style={{ width: "100%" }}>
											<hr></hr>
											<span className="accordion_notification">
												Analytics
												<span>7</span>
											</span>
										</small>
									</span>
								</div>
							</div>
							<div className="manage_folders">
								<FaRegFolderOpen /> Manage Folders
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;

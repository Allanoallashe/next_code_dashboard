/** @format */
import Image from "next/image";
import "../leftcard.css";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { TbWallet } from "react-icons/tb";

import dribble from "../../ui/assets/dribble.svg";
import instagram from "../../ui/assets/instagram.webp";
import behance from "../../ui/assets/behance.png";
import google from "../../ui/assets/google.png";
import pic from "../../ui/assets/pic4.jpg";

export default function Leftcard() {
	return (
		<div className="left_card_container">
			<div className="left_card_container_block1">
				<div className="card_one">
					<span
						style={{
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								gap: 4,
								cursor: "pointer",
							}}>
							<HiOutlineMenuAlt2 />
							<IoIosArrowDown />
						</span>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 6,
								padding: 5,
								border: "solid 1px #b5a6a7",
								borderRadius: "10px",
								cursor: "pointer",
							}}>
							Filters
							<IoFilter />
						</span>
					</span>

					<div>
						<div className="media_contents">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
								}}>
								<Image
									src={dribble}
									width={23}
									height={20}
								/>
								<span style={{ color: "#A29392" }}>Dribble</span>
							</div>
							<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
								$227,459
								<span
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "1px 4px",
										borderRadius: "10px",
										boxShadow: "0 0 0 3px #dededd",
										width: 20,
										opacity: 0.8,
									}}>
									43%
								</span>
							</div>
						</div>
						<div className="media_contents">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
								}}>
								<Image
									src={instagram}
									width={20}
									height={20}
								/>
								<span style={{ color: "#A29392" }}>Instagram</span>
							</div>
							<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
								$142,823
								<span
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "1px 4px",
										borderRadius: "10px",
										boxShadow: "0 0 0 3px #dededd",
										width: 20,
										opacity: 0.8,
									}}>
									27%
								</span>
							</div>
						</div>
						<div className="media_contents">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
								}}>
								<Image
									src={behance}
									width={20}
									height={20}
								/>
								<span style={{ color: "#A29392" }}>Behance</span>
							</div>
							<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
								$85,935
								<span
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "1px 4px",
										borderRadius: "10px",
										boxShadow: "0 0 0 3px #dededd",
										width: 20,
										opacity: 0.8,
									}}>
									11%
								</span>
							</div>
						</div>
						<div className="media_contents">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 5,
								}}>
								<Image
									src={google}
									width={20}
									height={20}
								/>
								<span style={{ color: "#A29392" }}>Google</span>
							</div>
							<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
								$37,028
								<span
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "1px 4px",
										borderRadius: "10px",
										boxShadow: "0 0 0 3px #dededd",
										width: 20,
										opacity: 0.8,
									}}>
									7%
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="card_two">
					<span
						style={{
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								gap: 4,
								cursor: "pointer",
							}}>
							<HiOutlineMenuAlt2 />
							<IoIosArrowDown />
						</span>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 6,
								padding: 5,
								border: "solid 1px #b5a6a7",
								borderRadius: "10px",
								cursor: "pointer",
							}}>
							Filters
							<IoFilter />
						</span>
					</span>

					<section className="media_content_bars_box">
						<div
							style={{ height: "80%" }}
							className="bars_items">
							<Image
								src={behance}
								width={20}
								height={20}
							/>
							<span className="span1"></span>
						</div>
						<div
							style={{ height: "100%" }}
							className="bars_items full">
							<Image
								src={dribble}
								width={20}
								height={20}
							/>
							<span className="span2"></span>
						</div>
						<div
							style={{ height: "60%" }}
							className="bars_items full">
							<Image
								src={google}
								width={20}
								height={20}
							/>
							<span className="span3"></span>
						</div>
						<div
							style={{ height: "40%" }}
							className="bars_items full">
							<Image
								src={instagram}
								width={20}
								height={20}
							/>
							<span className="span4"></span>
						</div>
						<div
							style={{ height: "90%" }}
							className="bars_items ">
							<TbWallet style={{ fontSize: "22px" }} />
						</div>
					</section>
					<div className="icons_description_box">
						<span style={{ opacity: 0.6 }}>Deals Amount</span>
						<p style={{ display: "flex", alignItems: "center", gap: 6 }}>
							by referrer category <IoIosArrowDown />
						</p>
					</div>
				</div>
			</div>

			{/* -----------------------------------------------------------------------
          lower block
        -------------------------------------------------------------------------
       */}

			<div className="left_card_container_block2">
				<div className="first_ribbon">
					<div className="first_ribbon_leftbox">
						<Image
							width={24}
							height={24}
							src={dribble}
						/>
						<div>
							<span style={{ opacity: 0.6 }}>Platform Value</span>
							<p
								style={{
									display: "flex",
									alignItems: "center",
									gap: 4,
									cursor: "pointer",
								}}>
								Dribble <IoIosArrowDown />
							</p>
						</div>
					</div>
					<div className="first_ribbon_rightbox">
						<span>Revenue</span>
						<span>Leads</span>
						<span>W/L</span>
					</div>
				</div>
				<div className="second_mega_ribbon">
					<div className="ribbon_red_card">
						<div className="average_monthly_span">
							<span style={{ opacity: 0.7 }}>Average Monthly</span>
						</div>
						<div className="average_monthly_description">
							<div>
								<span style={{ opacity: 0.7 }}>Revenue</span>
								<p>$18,582</p>
							</div>
							<div>
								<span style={{ opacity: 0.7 }}>Leads</span>
								<p>
									373 <span style={{ opacity: 0.7 }}>97/276</span>
								</p>
							</div>
							<div>
								<span style={{ opacity: 0.7 }}>Win/Lose</span>
								<p>
									16% <span style={{ opacity: 0.7 }}>51/318</span>
								</p>
							</div>
						</div>
					</div>
					<div className="revenue_graph">
						<span className="revenue_graph_fore_span_child">$14,500</span>
						<span className="revenue_graph_fore_span_child">$11,000</span>
						<span className="revenue_graph_fore_span_child">$7,500</span>
						<span className="revenue_graph_fore_span_child last_span_child">
							$4,000
						</span>

						<div className="revenue_absolute_graph">
							<div className="absolute_revbox">
								<div className="relative_revbars">
									<div
										className="child_one"
										style={{ height: "60%" }}>
										<span>$6,901</span>
									</div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "44%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "20%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
							</div>
							<div className="absolute_revbox">
								<div className="relative_revbars">
									<div
										className="child_one"
										style={{ height: "90%" }}>
										<span>$11,035</span>
									</div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "62%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "42%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
							</div>
							<div className="absolute_revbox">
								<div className="relative_revbars">
									<div
										className="child_one"
										style={{ height: "78%" }}>
										<span>$9,288</span>
									</div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "36%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
								<div className="relative_revbars">
									<div style={{ height: "50%" }}></div>
									<Image
										src={pic}
										width={18}
										height={18}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

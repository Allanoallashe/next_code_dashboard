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
									width={20}
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

			<div className="left_card_container_block2">block 2</div>
		</div>
	);
}

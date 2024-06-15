/** @format */
import { GiCheckeredDiamond } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoDiamondSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import image4 from "../../ui/assets/pic1.jpg";
import Image from "next/image";

import "../revenuecard.css";

export default function Revenuecard() {
	return (
		<div className="revenue_container">
			<div className="revenue_card_container">
				<div className="revenue_box1">
					<h3>Revenue</h3>
					<div>
						<h2>
							$528,976<span style={{ color: "#c1bebc" }}>.82</span>
						</h2>
						<h6
							style={{
								backgroundColor: "#ce325a",
								color: "#fbfbfb",
								display: "flex",
								alignItems: "flex-start",
								gap: 5,
								padding: "4px 8px",
								borderRadius: "10px",
							}}>
							<GiCheckeredDiamond /> 7.9%
						</h6>
						<h6
							style={{
								backgroundColor: "#ce325a",
								color: "#fbfbfb",
								display: "flex",
								alignItems: "flex-start",
								padding: "4px 8px",
								borderRadius: "10px",
							}}>
							$27,335.09
						</h6>
					</div>

					<h6 style={{ opacity: 0.9 }}>
						vs prev, $501,641.73 Jun 1 - Aug 31, 2023 <IoIosArrowDown />
					</h6>
				</div>
				<div className="revenue_box2">
					<div className="revenue_box2_article_box">
						<article>
							<p>Top Sales</p>
							<p>72</p>
							<div>
								<span>
									<Image
										src={image4}
										width={22}
										height={22}
									/>
									Mikasa .
								</span>
								<IoIosArrowForward />
							</div>
						</article>
						<article>
							<p
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
								}}>
								Best Deal <CiStar />
							</p>
							<p>$ 42,300</p>
							<div>
								<span>Rolf Inc.</span>
								<IoIosArrowForward />
							</div>
						</article>
					</div>
					<div className="revenue_box2_article_box2">
						<article>
							Deals
							<span
								style={{
									display: "flex",
									alignItems: "center",
									padding: "3px 8px",
									borderRadius: "8px",
									backgroundColor: "#C1BEBC",
									color: "#fbfbfb",
								}}>
								256
							</span>
							<span style={{ display: "flex", alignItems: "center", gap: 3 }}>
								<IoDiamondSharp />5
							</span>
						</article>
						<article>
							Value
							<span
								style={{
									display: "flex",
									alignItems: "center",
									padding: "3px 8px",
									borderRadius: "8px",
									backgroundColor: "#ce325a",
									color: "#fbfbfb",
								}}>
								528k
							</span>
							<span style={{ display: "flex", alignItems: "center", gap: 3 }}>
								<GiCheckeredDiamond />
								7.9%
							</span>
						</article>
						<article>
							Deals
							<span
								style={{
									display: "flex",
									alignItems: "center",
									padding: "3px 8px",
									borderRadius: "8px",
									backgroundColor: "#C1BEBC",
									color: "#fbfbfb",
								}}>
								44%
							</span>
							<span style={{ display: "flex", alignItems: "center", gap: 3 }}>
								<GiCheckeredDiamond />
								1.2%
							</span>
						</article>
					</div>
				</div>
			</div>

			<div className="revenue_ribbon">
				<div className="revenue_ribbon1">
					<div
						style={{ flex: 2 }}
						className="revenue_ribbon1_items">
						<span>
							<Image
								src={image4}
								width={22}
								height={22}
							/>
							$209,633
						</span>
						<span style={{ color: "#c1bebc" }}>39.63%</span>
					</div>
					<div
						style={{ flex: 1.5 }}
						className="revenue_ribbon1_items">
						<span>
							<Image
								src={image4}
								width={22}
								height={22}
							/>
							$156,841
						</span>
						<span style={{ color: "#c1bebc" }}>29.65%</span>
					</div>
					<div
						style={{ flex: 1 }}
						className="revenue_ribbon1_items">
						<span>
							<Image
								src={image4}
								width={22}
								height={22}
							/>
							$117,115
						</span>
						<span style={{ color: "#c1bebc" }}>22.14%</span>
					</div>
					<div
						style={{ flex: 1 }}
						className="revenue_ribbon1_items last_ribbon_item">
						<p style={{ display: "flex", alignItems: "center", gap: 4 }}>
							<span
								style={{
									backgroundColor: "#26292b",
									height: 28,
									width: 28,
									borderRadius: "50%",
									color: "#fbfbfb",
									fontWeight: "bold",
									fontSize: "20px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								C
							</span>
							$45,386
						</p>
						<span style={{ color: "#636262" }}>8.58%</span>
					</div>
				</div>
				<span className="ribbon_details">Details</span>
			</div>
		</div>
	);
}

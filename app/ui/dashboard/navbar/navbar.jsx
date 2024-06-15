/** @format */

import "./navbar.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import rainbow from "../../assets/rainbow.png";

function Navbar() {
	return (
		<>
			<div className="nav-bar">
				<div className="search-bar">
					<IoIosSearch
						className="search"
						style={{ width: "18px" }}
					/>
					<input
						type="search"
						placeholder='Try Searching "Insights"'
					/>
				</div>
				<div className="right-box">
					<div className="inner-box">
						<MdMenu style={{ cursor: "pointer" }} />
						<IoSunny
							style={{
								cursor: "pointer",
								backgroundImage:
									"linear-gradient(to bottom, #f5f5 50%, #f5f5f5 90%, #000 100%)",
								borderRadius: "50%",
								padding: 2,
							}}
						/>
					</div>
					<IoIosAdd
						className="plus_button"
						style={{ cursor: "pointer", fontWeight: "light" }}
					/>
				</div>
			</div>
		</>
	);
}

export default Navbar;

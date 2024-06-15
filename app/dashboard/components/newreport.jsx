/** @format */
"use client";
import { DateRangePicker } from "rsuite";
import { IoIosArrowDown } from "react-icons/io";
import "rsuite/dist/rsuite-no-reset.min.css";

export default function Newreport() {
	return (
		<div
			className="new_report"
			style={{ marginBottom: "12px" }}>
			<h2>New Report</h2>
			<div
				className="time_frame"
				style={{ fontSize: "14px" }}>
				<span className="toggle_switch">
					<div></div>
				</span>
				<span>Timeframe</span>
				<DateRangePicker
					size="xs"
					format="MMM dd, yyyy"
					appearance="subtle"
					style={{
						width: 150,
						boxShadow: "0 0 0 2px #f3efee",
						borderRadius: "6px",
						color: "#26292b",
						backgroundColor: "#f3efee",
						border: "none",
						outline: "none",
					}}
					caretAs={IoIosArrowDown}
					character="~"
					placement="bottomRight"
					preventOverflow
					editable
					containerPadding={1}
				/>
			</div>
		</div>
	);
}

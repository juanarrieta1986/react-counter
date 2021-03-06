import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//<canvas id="myCanvas" width="200" height="200" style="border:1px solid"></canvas>
const columnwidth = {
	width: "400px",
	height: "200px",
	border: "2px solid #FFFFFF",
	backgroundColor: "black",
	marginLeft: "5",
	marginRight: "5",
	position: "relative",
	borderRadius: "15px"
};

const boxAlignment = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: "80px",
	Color: "Green"
};

import { pos1 } from "./component/counter.js";
import { pos2 } from "./component/counter.js";
import { pos3 } from "./component/counter.js";
import { pos4 } from "./component/counter.js";
import { pos5 } from "./component/counter.js";
import { pos6 } from "./component/counter.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="row" fluid>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info"></div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info"></div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos6}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos5}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos4}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos3}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos2}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{pos1}
					</div>
				</div>
			</div>
		</div>
	);
}

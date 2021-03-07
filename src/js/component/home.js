import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

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

let Pos1 = 0;
let Pos2 = 0;
let Pos3 = 0;
let Pos4 = 0;
let Pos5 = 0;
let Pos6 = 0;
let counter = 0;
let counterCopy = 0;

export function myTimer() {
	Pos1++;
	console.log(Pos1);
}

//create your first component
export function Home() {
	//export const Home = props => {
	/*Pos1 = 0;
	Pos2 = ;
	Pos3 = 3;
	Pos4 = 4;
	Pos5 = 5;
	Pos6 = 6;*/

	counter++;
	counterCopy = counter;
	Pos1 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);
	Pos2 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);
	Pos3 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);
	Pos4 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);
	Pos5 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);
	Pos6 = counterCopy % 10;
	counterCopy = Math.floor(counterCopy / 10);

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
						{Pos6}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{Pos5}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{Pos4}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{Pos3}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{Pos2}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxAlignment} className="text-info">
						{Pos1}
					</div>
				</div>
			</div>
		</div>
	);
}

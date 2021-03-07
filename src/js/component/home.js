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

const columnInput = {
	width: "400px",
	height: "300px",
	border: "2px solid #FFFFFF",
	backgroundColor: "black",
	marginLeft: "5",
	marginRight: "5",
	position: "relative",
	borderRadius: "15px"
};

const boxNumer = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: "80px",
	Color: "Green"
};

const boxInput = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: "8px",
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
let stopState = true;
let resetState = false;
let startState = false;
let resumeState = false;

/*export function myTimer() {
	Pos1++;
	console.log(Pos1);
}*/

export function Home() {
	const clickStop = e => {
		stopState = true;
	};
	const clickStart = e => {
		if (counter == 0 && stopState == true) {
			stopState = false;
		}
		//if
	};
	const clickResume = e => {
		if (counter > 0 && stopState == true) {
			stopState = false;
		}
	};
	const clickCountDown = e => {
		let countValue = document.getElementsByClassName("input-group");
		console.log(countValue);
		if (countValue > 0 && stopState == true) {
			counter = countValue;
			stopState = false;
		}
	};

	const clickReset = e => {
		//stopState = true;
		counter = 0;
		Pos1 = 0;
		Pos2 = 0;
		Pos3 = 0;
		Pos4 = 0;
		Pos5 = 0;
		Pos6 = 0;
	};

	if (stopState == false) {
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
	}

	return (
		<div className="container">
			<div className="row" fluid>
				<div style={columnInput} className="col">
					<div style={boxInput} className="text-info">
						<button
							onClick={clickStop}
							type="button"
							className="btn btn-secondary">
							Stop
						</button>
						<button
							onClick={clickStart}
							type="button"
							className="btn btn-secondary">
							Start
						</button>
						<button
							onClick={clickReset}
							type="button"
							className="btn btn-secondary">
							Reset
						</button>
						<button
							onClick={clickResume}
							type="button"
							className="btn btn-secondary">
							Resume
						</button>
						<button
							onClick={clickCountDown}
							type="button"
							className="btn btn-secondary">
							Start Countdown
						</button>
						<div className="input-group">
							<span className="input-group-text">Countdown</span>
							<textarea
								className="form-control"
								aria-label="With textarea">
								0
							</textarea>
						</div>
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxInput} className="text-info"></div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos6}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos5}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos4}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos3}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos2}
					</div>
				</div>
				<div style={columnwidth} className="col">
					<div style={boxNumer} className="text-info">
						{Pos1}
					</div>
				</div>
			</div>
		</div>
	);
}

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
//import { Counter } from "./component/counter.js";

//render your react application
ReactDOM.render(
	<div>
		<Home />
	</div>,
	document.querySelector("#app")
);

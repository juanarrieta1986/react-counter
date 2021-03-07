//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { myTimer } from "./component/home.js";
//import { Counter } from "./component/counter.js";

/*import { pos1 } from "./component/counter.js";
import { pos2 } from "./component/counter.js";
import { pos3 } from "./component/counter.js";
import { pos4 } from "./component/counter.js";
import { pos5 } from "./component/counter.js";
import { pos6 } from "./component/counter.js";*/

//setInterval(myTimer, 1000);

//render your react application
//setInterval(ReactDOM.render(<Home />, document.querySelector("#app")), 1000);
setInterval(
	() => ReactDOM.render(<Home />, document.querySelector("#app")),
	1000
);

import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { BrowserRouter as Router } from "react-router-dom";
import "../_main.scss";
const App = () => {
	return (
		<Router>
			<div className="app__main row">
				<div className="column-left">
					<Header />
				</div>
				<div className="double-column">
					<Content />
				</div>
			</div>
		</Router>
	);
};

export default App;

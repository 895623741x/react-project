import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header1 from "./Header1";
import Home from "./Home";
import Home1 from "./Home1";
import Protein from "./Protein";
import Cart from "./Cart/Cart";
import { RecoilRoot } from "recoil";
import Snack from "./Snack";
import Accessories from "./Accessories";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Home1></Home1>
					</Route>
					<Route path="/protein" component={Protein}></Route>
					<Route path="/Cart" component={Cart}></Route>
					<Route path="/snack" component={Snack}></Route>
					<Route path="/accessories" component={Accessories}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

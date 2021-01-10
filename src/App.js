import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Home1 from "./Home1";
import Protein from "./ProteinPage/Protein";
import Cart from "./Cart/Cart";
import Snack from "./SnackPage/Snack";

import Shaker from "./ShakerPage/Shaker";
import Login from "./Login";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Home1></Home1>
					</Route>
					<Route path="/protein" component={Protein}></Route>
					<Route path="/cart" component={Cart}></Route>
					<Route path="/snack" component={Snack}></Route>
					<Route path="/shaker" component={Shaker}></Route>
					<Route path="/login" component={Login}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default withRouter(App);

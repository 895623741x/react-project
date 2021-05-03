import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Home1 from "./Home1";
import Protein from "./ProductPage/Protein";
import Cart from "./Cart/Cart";
import Snack from "./ProductPage/Snack";
import PopularProducts from "./ProductPage/PopularProducts";
import Shaker from "./ProductPage/Shaker";
import Login from "./Login";
import UserPage from "./UserPage";
import Payment from "./PaymentPage/Payment";
import Orders from "./OrdersPage/Orders";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useStateValue } from "./StateProvider";

const promise = loadStripe(
	"pk_test_51IRCF2DWpxS6go0h87nbubfmHWsaVaREfulCxp3bP0dl0qJ5X8k6PfE1cZRxWuNckNGqFCLaeJYNeN36IbrH4U4B00FYkVvJm8"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("the user is >>> ", authUser);
			if (authUser) {
				// the user has just logged in or the user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/" component={Home1}></Route>
					<Route path="/popular" component={PopularProducts}></Route>
					<Route path="/protein" component={Protein}></Route>
					<Route path="/cart" component={Cart}></Route>
					<Route path="/snack" component={Snack}></Route>
					<Route path="/shaker" component={Shaker}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/userPage" component={UserPage}></Route>
					<Route path="/payment">
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/orders" component={Orders}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default withRouter(App);

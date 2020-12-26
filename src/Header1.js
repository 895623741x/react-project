import React from "react";
import "./Header1.css";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header1() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" fixed="top" className="navbar">
				<Nav className="flex-column">
					<div className="nav-div1">
						<Navbar.Brand>
							<Link to="/">
								<h1>IRONPROTEIN</h1>
							</Link>
						</Navbar.Brand>
						<Nav>
							<Nav.Link>
								<Link to="/account">
									<AccountCircleIcon />
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/cart">
									<ShoppingCartIcon />
								</Link>
							</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" />
							<Button variant="outline-info">
								<SearchIcon />
							</Button>
						</Form>
					</div>
					<div className="nav-div2">
						<Nav className="nav">
							<Nav.Link>
								<Link to="/protein">PROTEIN</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/snack">SNACK & DRINKS</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/accessories">ACCESSORIES</Link>
							</Nav.Link>
						</Nav>
					</div>
				</Nav>
			</Navbar>
		</div>

		// <nav className="nav">
		// 	<div className="nav-div1">
		// 		<Link className="nav-icon">
		// 			<img src="./assets/athle.jpg" alt="" />
		// 		</Link>
		// 		<input type="text" placeholder="Search"></input>
		// 		<Link>
		// 			<SearchIcon />
		// 		</Link>
		// 		<Link className="nav-account">
		// 			<AccountCircleIcon />
		// 		</Link>
		// 		<Link className="nav-shoppingCart">
		// 			<ShoppingCartIcon />
		// 		</Link>
		// 	</div>
		// 	<div className="nav-div2">
		// 		<Link to="protein" className="nav-protein">
		// 			PROTEIN
		// 		</Link>
		// 		<Link to="snack" className="nav-snacks">
		// 			SNACK
		// 		</Link>
		// 		<Link to="accessories" className="nav-accessories">
		// 			ACCESSORIES
		// 		</Link>
		// 	</div>
		// </nav>
	);
}

export default Header1;

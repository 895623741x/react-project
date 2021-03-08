import React from "react";
import "./Header1.css";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import UserPage from "./UserPage";

function Header1() {
	const [{ user, basket }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div>
			<Navbar bg="dark" variant="dark" fixed="top" className="navbar">
				<Nav className="flex-column">
					<div className="nav-div1">
						<Navbar.Brand className="navBrand">
							<Link to="/">
								<h2>IRONPROTEIN</h2>
							</Link>
						</Navbar.Brand>
						<Nav.Link>
							<Link to="/protein">PROTEIN</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/snack">SNACK & DRINKS</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/shaker">SHAKER</Link>
						</Nav.Link>
						<Nav.Link className="navItem" onClick={handleAuthentication}>
							<Link to={!user && "/login"}>
								<AccountCircleIcon fontSize="large" />
								<span className="accountIcon-span">
									{user ? (
										<Link to="/userPage">
											<div>Hi, {user.email}</div>
										</Link>
									) : (
										"Hi, guest"
									)}
								</span>
							</Link>
						</Nav.Link>
						<Nav.Link className="navItem">
							<Link to="/cart">
								<ShoppingCartIcon fontSize="large" />
								<span>({basket?.length})</span>
							</Link>
						</Nav.Link>

						<Form inline className="form">
							{/* <FormControl type="text" placeholder="Search" /> */}
							{/* <Button variant="outline-info">
								<SearchIcon />
							</Button> */}
						</Form>
					</div>
					<div className="nav-div2">
						<Nav className="nav">{/* <Nav.Link>
								<Link to="/accessories">ACCESSORIES</Link>
							</Nav.Link> */}</Nav>
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

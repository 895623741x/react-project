import React, { useState } from "react";
import "./Header1.css";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import UserPage from "./UserPage";

function Header1() {
	const history = useHistory();
	const [{ user, basket }, dispatch] = useStateValue();
	const [searchItem, setSearchItem] = useState("");
	const handleLogout = () => {
		if (user) {
			auth.signOut();
			dispatch({
				type: "SET_USER",
				user: null,
			});
			history.push("/login");
		}
	};

	const submitHandler = () => {};

	return (
		<nav className="header">
			<Link to="/" style={{ textDecoration: "none" }}>
				<div className="logo">
					<img src={require("./assets/logo.png")} />
				</div>
			</Link>

			<ul className="navItems">
				<li className="pageOption">
					<Link to="/protein" style={{ textDecoration: "none", color: "white" }}>
						<h5>Protein</h5>
					</Link>
				</li>
				<li className="pageOption">
					<Link to="/snack" style={{ textDecoration: "none", color: "white" }}>
						<h5>Snacks</h5>
					</Link>
				</li>
				<li className="pageOption">
					<Link to="/shaker" style={{ textDecoration: "none", color: "white" }}>
						<h5>Shakers</h5>
					</Link>
				</li>

				<li className="pageOption_account">
					{user ? (
						<div className="member_login_div">
							<Link to="/userPage">
								<div>
									<AccountCircleIcon fontSize="large" />
									<span>{user.email}</span>
								</div>
							</Link>
							<ul className="member_logout">
								<li>
									<Button variant="" onClick={handleLogout}>
										Logout
									</Button>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/login">
							<AccountCircleIcon fontSize="large" />
							<span>Hi, guest</span>
						</Link>
					)}
				</li>
				<li className="pageOption_cart">
					<div className="shoppingCart">
						<Link to="/cart" style={{ textDecoration: "none" }}>
							<ShoppingCartIcon fontSize="large" />
							<span>({basket?.length})</span>
						</Link>
					</div>
				</li>

				<li className="pageOption_form">
					<form onSubmit={submitHandler} className="form">
						<input
							className="input"
							placeholder="Search..."
							onChange={(e) => setSearchItem(e.target.value)}
							value={searchItem}
						/>

						<button
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								console.log("good");
							}}
						>
							<SearchIcon />
						</button>
					</form>
				</li>
			</ul>
		</nav>
		// <div>
		// 	<Navbar bg="dark" variant="dark" fixed="top" className="navbar">
		// 		<Nav className="flex-column">
		// 			<div className="nav-div1">
		// 				<Navbar.Brand className="navBrand">
		// 					<Link to="/">
		// 						<h2>IRONPROTEIN</h2>
		// 					</Link>
		// 				</Navbar.Brand>
		// 				<Nav.Link>
		// 					<Link to="/protein">PROTEIN</Link>
		// 				</Nav.Link>
		// 				<Nav.Link>
		// 					<Link to="/snack">SNACK & DRINKS</Link>
		// 				</Nav.Link>
		// 				<Nav.Link>
		// 					<Link to="/shaker">SHAKER</Link>
		// 				</Nav.Link>
		// 				<Nav.Link className="navItem" onClick={handleAuthentication}>
		// 					<Link to={!user && "/login"}>
		// 						<AccountCircleIcon fontSize="large" />
		// 						<span className="accountIcon-span">
		// 							{user ? (
		// 								<Link to="/userPage">
		// 									<div>Hi, {user.email}</div>
		// 								</Link>
		// 							) : (
		// 								"Hi, guest"
		// 							)}
		// 						</span>
		// 					</Link>
		// 				</Nav.Link>
		// 				<Nav.Link className="navItem">
		// 					<Link to="/cart">
		// 						<ShoppingCartIcon fontSize="large" />
		// 						<span>({basket?.length})</span>
		// 					</Link>
		// 				</Nav.Link>

		// 				<Form inline className="form">
		// 					{/* <FormControl type="text" placeholder="Search" /> */}
		// 					{/* <Button variant="outline-info">
		// 						<SearchIcon />
		// 					</Button> */}
		// 				</Form>
		// 			</div>
		// 			<div className="nav-div2">
		// 				<Nav className="nav">{/* <Nav.Link>
		// 						<Link to="/accessories">ACCESSORIES</Link>
		// 					</Nav.Link> */}</Nav>
		// 			</div>
		// 		</Nav>
		// 	</Navbar>
		// </div>

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

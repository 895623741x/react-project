import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		history.push("/register");
		// e.preventDefault();
		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.then(
		// 		// it successfully create a new user with email and password
		// 		(auth) => {
		// 			if (auth) {
		// 				history.push("/");
		// 			}
		// 		}
		// 	)
		// 	.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<h1>IRONPROTEIN</h1>
			</Link>

			<div className="login-container">
				<form>
					<h1>Sign in</h1>
					<h5>Email</h5>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
					<h5>Password</h5>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
					<button className="login-signInButton" onClick={signIn}>
						Sign in
					</button>
					<button className="login-registerButton" onClick={register}>
						Become a member
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;

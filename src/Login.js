import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "react-bootstrap";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = (event) => {
		event.preventDefault();
	};
	return (
		<div>
			<h1>Sign in</h1>

			<form>
				<p>Email</p>
				<input type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
				<p>Password</p>
				<input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
				<Button type="submit" onClick={signIn}></Button>
			</form>
		</div>
	);
}

export default Login;

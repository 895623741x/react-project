import React from "react";
import { Button } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { getBasketSubtotal } from "../Reducer";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";

function Subtotal() {
	const history = useHistory();
	const [{ basket }] = useStateValue();
	let subtotal = getBasketSubtotal(basket);
	return (
		<div>
			<p>
				${subtotal.toLocaleString(subtotal)}({basket.length} items)
			</p>
			<Button onClick={() => history.push("/payment")}>Checkout</Button>
		</div>
	);
}

export default Subtotal;

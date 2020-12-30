import React from "react";
import { Button } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { getBasketSubtotal } from "../Reducer";
import "./Subtotal.css";

function Subtotal() {
	const [{ basket }] = useStateValue();
	let subtotal = getBasketSubtotal(basket);
	return (
		<div>
			<p>
				${subtotal.toLocaleString(subtotal)}({basket.length} items)
			</p>
			<Button>Checkout</Button>
		</div>
	);
}

export default Subtotal;

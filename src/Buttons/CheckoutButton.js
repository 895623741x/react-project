import React from "react";
import "./CheckoutButton.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function CheckoutButton() {
	return (
		<div className="checkoutButton">
			<button className="button_content">
				<p className="button_text">CHECKOUT</p>
				<ArrowForwardIosIcon></ArrowForwardIosIcon>
			</button>
		</div>
	);
}

export default CheckoutButton;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, name, image, price, description, number, hideButton }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	const increaseItemNum = () => {
		dispatch({
			type: "INCREASE_TO_BASKET",
			id: id,
		});
	};

	const decreaseItemNum = () => {
		dispatch({
			type: "DECREASE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div key={id} className="checkoutProduct">
			<img className="checkoutProduct-image" src={image} alt=""></img>
			<div className="checkoutProduct-info">
				<h3>{name}</h3>
				<p>{description}</p>
				<p>${price}</p>
				{!hideButton && (
					<div>
						<Button onClick={removeFromBasket}>Remove From The Basket</Button>
						<div className="checkoutProduct-info-itemAmount">
							<Button onClick={increaseItemNum}>+</Button>
							<input className="info-input" value={number}></input>
							<Button onClick={decreaseItemNum}>-</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;

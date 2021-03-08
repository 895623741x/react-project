import React, { useState, useEffect } from "react";
import CheckoutProduct from "../CheckoutProduct";
import Header1 from "../Header1";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketSubtotal } from "../Reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";
import { db } from "../firebase";

import "./Payment.css";
import { Card } from "@material-ui/core";

function Payment() {
	const [{ user, basket }, dispatch] = useStateValue();
	let subtotal = getBasketSubtotal(basket);
	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState(false);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		// generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				// Stripes expects the total in a currencies subunits
				url: `/payments/create?total=${getBasketSubtotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	console.log("the client secret is >>>", clientSecret);
	console.log("user is", user);
	console.log("the basket is", basket);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				console.log("paymentintent is ", paymentIntent);
				// paymentIntent = payment confirmation
				db
					.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						cart: [...basket],
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<Header1 />
			<div className="payment_container">
				<h1>Checkout</h1>
				<div className="userInformation">
					<h5>Delivery Address: </h5>
					<div className="address">
						<p>{user?.email}</p>
						<p>Dan Street,</p>
						<p>San Antonio, TX</p>
					</div>
				</div>

				<div className="items">
					<h5>Items in your cart</h5>
					<div className="paymentItems">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
								description={item.description}
								number={item.number}
							></CheckoutProduct>
						))}
					</div>
				</div>

				<div className="paymentMethod">
					<h5>Payment Method</h5>

					<div className="paymentDetail">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="paymentPrice_container">
								<p>
									Order Total: ${subtotal.toLocaleString(subtotal)}({basket.length} items)
								</p>
							</div>

							<button disabled={processing || disabled || succeeded}>
								<span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
							</button>
						</form>
					</div>

					{error && <div>{error}</div>}
				</div>
			</div>
		</div>
	);
}

export default Payment;

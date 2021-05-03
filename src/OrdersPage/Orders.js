import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Orders.css";
import Order from "./Order";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db
				.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapShot) =>
					setOrders(
						snapShot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	});

	return (
		<div className="orders">
			<h1>Orders</h1>
			<div className="oeders_order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;

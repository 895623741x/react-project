import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import "./Products.css";
import Product from "./Product";
import { products } from "./data";

////

// const productImgs = products.map((item) => require("./assets/" + item.image + ".png"));
function productCards() {
	let cards = [];
	for (let i = 0; i < products.length; i++) {
		cards[i] = (
			<Product
				id={i}
				name={products[i].proName}
				image={products[i].image}
				price={products[i].price}
				description={products[i].description}
				number={products[i].number}
			></Product>
		);
	}
	return cards;
}

function Products() {
	return <CardGroup className="homepageProducts">{productCards()}</CardGroup>;
}

export default Products;

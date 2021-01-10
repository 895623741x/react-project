import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import "./Products.css";
import Product from "./Product";
import { products, bestSellersArray, snacks, shakers } from "./data";

////

function allShakers() {
	let shakersArray = [];
	for (let i = 0; i < shakers.length; i++) {
		shakersArray[i] = (
			<Product
				id={shakers[i].id}
				name={shakers[i].proName}
				image={shakers[i].image}
				price={shakers[i].price}
				description={shakers[i].description}
				number={shakers[i].number}
				popularity={shakers[i].popularity}
			></Product>
		);
	}
	return shakersArray;
}

function allSnacks() {
	let snacksArray = [];
	for (let i = 0; i < snacks.length; i++) {
		snacksArray[i] = (
			<Product
				id={snacks[i].id}
				name={snacks[i].proName}
				image={snacks[i].image}
				price={snacks[i].price}
				description={snacks[i].description}
				number={snacks[i].number}
				popularity={snacks[i].popularity}
			></Product>
		);
	}
	return snacksArray;
}

function bestSellers() {
	let bestSellers = [];
	for (let i = 0; i < bestSellersArray.length; i++) {
		bestSellers[i] = (
			<Product
				id={bestSellersArray[i].id}
				name={bestSellersArray[i].proName}
				image={bestSellersArray[i].image}
				price={bestSellersArray[i].price}
				description={bestSellersArray[i].description}
				number={bestSellersArray[i].number}
				popularity={bestSellersArray[i].popularity}
			></Product>
		);
	}
	return bestSellers;
}

// const productImgs = products.map((item) => require("./assets/" + item.image + ".png"));
function productCards() {
	let cards = [];
	for (let i = 0; i < products.length; i++) {
		cards[i] = (
			<Product
				id={products[i].id}
				name={products[i].proName}
				image={products[i].image}
				price={products[i].price}
				description={products[i].description}
				number={products[i].number}
				populrity={products[i].popularity}
			></Product>
		);
	}
	return cards;
}

function Products({ isBestSeller, isSnack, isShaker }) {
	console.log(isBestSeller);
	console.log(isSnack);
	console.log(isShaker);
	if (isBestSeller === "true") {
		return <CardGroup className="homepageProducts">{bestSellers()}</CardGroup>;
	} else if (isSnack === "true") {
		return <CardGroup className="homepageProducts">{allSnacks()}</CardGroup>;
	} else if (isShaker === "true") {
		return <CardGroup className="homepageProducts">{allShakers()}</CardGroup>;
	} else {
		return <CardGroup className="homepageProducts">{productCards()}</CardGroup>;
	}
}

export default Products;

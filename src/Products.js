import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import "./Products.css";
import Product from "./Product";
import { products, bestAll, bestSnacks, bestShakers, bestProtein } from "./data";

////

function allProtein() {
	let proteinArray = [];
	for (let i = 0; i < bestProtein.length; i++) {
		proteinArray[i] = (
			<Product
				id={bestProtein[i].id}
				name={bestProtein[i].proName}
				image={bestProtein[i].image}
				price={bestProtein[i].price}
				description={bestProtein[i].description}
				number={bestProtein[i].number}
				popularity={bestProtein[i].popularity}
			></Product>
		);
	}
	return proteinArray;
}

function allShakers() {
	let shakersArray = [];
	for (let i = 0; i < bestShakers.length; i++) {
		shakersArray[i] = (
			<Product
				id={bestShakers[i].id}
				name={bestShakers[i].proName}
				image={bestShakers[i].image}
				price={bestShakers[i].price}
				description={bestShakers[i].description}
				number={bestShakers[i].number}
				popularity={bestShakers[i].popularity}
			></Product>
		);
	}
	return shakersArray;
}

function allSnacks() {
	let snacksArray = [];
	for (let i = 0; i < bestSnacks.length; i++) {
		snacksArray[i] = (
			<Product
				id={bestSnacks[i].id}
				name={bestSnacks[i].proName}
				image={bestSnacks[i].image}
				price={bestSnacks[i].price}
				description={bestSnacks[i].description}
				number={bestSnacks[i].number}
				popularity={bestSnacks[i].popularity}
			></Product>
		);
	}
	return snacksArray;
}

function bestSellers() {
	let bestSellers = [];
	for (let i = 0; i < bestAll.length; i++) {
		bestSellers[i] = (
			<Product
				id={bestAll[i].id}
				name={bestAll[i].proName}
				image={bestAll[i].image}
				price={bestAll[i].price}
				description={bestAll[i].description}
				number={bestAll[i].number}
				popularity={bestAll[i].popularity}
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

function Products({ isBestSeller, isSnack, isShaker, isProtein }) {
	console.log(isBestSeller);
	console.log(isSnack);
	console.log(isShaker);
	if (isBestSeller === "true") {
		return <CardGroup className="homepageProducts">{bestSellers()}</CardGroup>;
	} else if (isSnack === "true") {
		return <CardGroup className="homepageProducts">{allSnacks()}</CardGroup>;
	} else if (isShaker === "true") {
		return <CardGroup className="homepageProducts">{allShakers()}</CardGroup>;
	} else if (isProtein === "true") {
		return <CardGroup className="homepageProducts">{allProtein()}</CardGroup>;
	} else {
		return <CardGroup className="homepageProducts">{productCards()}</CardGroup>;
	}
}

export default Products;

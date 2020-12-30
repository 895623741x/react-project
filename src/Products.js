import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import "./Products.css";
import Product from "./Product";

let slideImgs = ["carouselImg1", "carouselImg2"];
const slides = slideImgs.map((item) => require("./assets/" + item + ".png"));

function slideCards() {
	var x;
	let slideCards = [];
	for (x = 0; x < slides.length; x++) {
		slideCards[x] = (
			<Carousel.Item interval={200}>
				<img className={`slide${x}`} src={slides[x]} alt="" />
			</Carousel.Item>
		);
	}
	return slideCards;
}

//// products in daily recommendation
const collagen = {
	id: 1,
	image: require("./assets/collagenacid1.png"),
	proName: "COLLANGEN + HYALURONIC ACID",
	price: 39.99,
	description: "Supports Healty Skin, Hair, &Joints",
	number: 1,
};
const goldCasein = {
	id: 2,
	image: require("./assets/goldcasein1.png"),
	proName: "GOLD STANDARD 100% CASEIN",
	price: 35.99,
	description: "Slow-Digesting Protein for Overnight Muscle Recovery",
	number: 1,
};
const goldPlant = {
	id: 3,
	image: require("./assets/goldplant1.png"),
	proName: "GOLD STANDARD 100% PLANT",
	price: 30.99,
	description: "Organic, Plant-Based Protein",
	number: 1,
};
const goldProteinDrink = {
	id: 4,
	image: require("./assets/goldproteindrink1.png"),
	proName: "GOLD STANDARD 100%  WHEY PROTEIN DRINK",
	price: 34.99,
	description: "Muscle Recovery On the Go",
	number: 1,
};
const goldStandard = {
	id: 5,
	image: require("./assets/goldstandard1.png"),
	proName: "GOLD STANDARD 100% WHEY",
	price: 9.99,
	description: "Post-Workout Muscle Support & Recovery",
	number: 1,
};
const hydrowhey = {
	id: 6,
	image: require("./assets/hydrowhey1.png"),
	proName: "PLATINUM HYDROWHEY",
	price: 34.99,
	description: "Hydrolyzed, Quick Digesting",
	number: 1,
};
const naturalGold = {
	id: 7,
	image: require("./assets/naturalgold1.png"),
	proName: "NATURALLY FLAVORED GOLD STANDARD 100% WHEY",
	price: 30.99,
	description: "No Artificial Flavors, Sweeteners or Colors",
	number: 1,
};
const performance = {
	id: 8,
	image: require("./assets/performance1.png"),
	proName: "PERFORMANCE WHEY",
	price: 47.99,
	description: "Concentrated Protein Complex",
	number: 1,
};
const products = [collagen, goldCasein, goldPlant, goldProteinDrink, goldStandard, hydrowhey, naturalGold, performance];
////

// const productImgs = products.map((item) => require("./assets/" + item.image + ".png"));
function productCards() {
	var i;
	let cards = [];
	for (i = 0; i < products.length; i++) {
		cards[i] = (
			// <Card style={{ margin: "10px 20px 10px 20px" }} key={i}>
			// 	<Card.Img variant="top" src={products[i].image}></Card.Img>
			// 	<Card.Body>
			// 		<Card.Title>{products[i].proName}</Card.Title>
			// 		<Card.Text>
			// 			{products[i].description}
			// 			<br />
			// 			<b>${products[i].price}</b>
			// 		</Card.Text>
			// 	</Card.Body>
			// 	<Button>ADD TO CART</Button>
			// </Card>
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

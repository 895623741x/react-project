import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import "./Home1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header1 from "./Header1.js";
import Products from "./Products";
//^^^^^import area

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
	image: "collagenacid1",
	proName: "COLLANGEN + HYALURONIC ACID",
	price: "$39.99",
	description: "Supports Healty Skin, Hair, &Joints",
};
const goldCasein = {
	image: "goldcasein1",
	proName: "GOLD STANDARD 100% CASEIN",
	price: "$35.99",
	description: "Slow-Digesting Protein for Overnight Muscle Recovery",
};
const goldPlant = {
	image: "goldplant1",
	proName: "GOLD STANDARD 100% PLANT",
	price: "$30.99",
	description: "Organic, Plant-Based Protein",
};
const goldProteinDrink = {
	image: "goldproteindrink1",
	proName: "GOLD STANDARD 100%  WHEY PROTEIN DRINK",
	price: "$34.99",
	description: "Muscle Recovery On the Go",
};
const goldStandard = {
	image: "goldstandard1",
	proName: "GOLD STANDARD 100% WHEY",
	price: "$9.99",
	description: "Post-Workout Muscle Support & Recovery",
};
const hydrowhey = {
	image: "hydrowhey1",
	proName: "PLATINUM HYDROWHEY",
	price: "$34.99",
	description: "Hydrolyzed, Quick Digesting",
};
const naturalGold = {
	image: "naturalgold1",
	proName: "NATURALLY FLAVORED GOLD STANDARD 100% WHEY",
	price: "$30.99",
	description: "No Artificial Flavors, Sweeteners or Colors",
};
const performance = {
	image: "performance1",
	proName: "PERFORMANCE WHEY",
	price: "$47.99",
	description: "Concentrated Protein Complex",
};
const productImgs = [
	collagen,
	goldCasein,
	goldPlant,
	goldProteinDrink,
	goldStandard,
	hydrowhey,
	naturalGold,
	performance,
];
////

const products = productImgs.map((item) => require("./assets/" + item.image + ".png"));
function productCards() {
	var i;
	let cards = [];
	for (i = 0; i < products.length; i++) {
		cards[i] = (
			<Card style={{ margin: "10px 20px 10px 20px" }}>
				<Card.Img variant="top" src={products[i]}></Card.Img>
				<Card.Body>
					<Card.Title>{productImgs[i].proName}</Card.Title>
					<Card.Text>
						{productImgs[i].description}
						<br />
						<b>{productImgs[i].price}</b>
					</Card.Text>
				</Card.Body>
				<Button>ADD TO CART</Button>
			</Card>
		);
	}
	return cards;
}

function Home1() {
	return (
		<div className="home-div">
			<Header1></Header1>
			<Carousel className="carousel">{slideCards()}</Carousel>
			<h1 className="recommendation">BEST SELLERS</h1>

			{/* <CardGroup className="homepageProducts">{productCards()}</CardGroup> */}
			<Products></Products>
		</div>
	);
}

export default Home1;

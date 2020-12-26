import React from "react";
import { Carousel, Media, Card, Nav, NavDropdown, Button, Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Protein.css";
import Header1 from "./Header1";
const collagen = {
	image: "collagenacid1",
	proName: "COLLANGEN + HYALURONIC ACID",
	description: "Supports Healty Skin, Hair, &Joints",
};
const goldCasein = {
	image: "goldcasein1",
	proName: "GOLD STANDARD 100% CASEIN",
	description: "Slow-Digesting Protein for Overnight Muscle Recovery",
};
const goldPlant = {
	image: "goldplant1",
	proName: "GOLD STANDARD 100% PLANT",
	description: "Organic, Plant-Based Protein",
};
const goldProteinDrink = {
	image: "goldproteindrink1",
	proName: "GOLD STANDARD 100%  WHEY PROTEIN DRINK",
	description: "Muscle Recovery On the Go",
};
const goldStandard = {
	image: "goldstandard1",
	proName: "GOLD STANDARD 100% WHEY",
	description: "Post-Workout Muscle Support & Recovery",
};
const hydrowhey = {
	image: "hydrowhey1",
	proName: "PLATINUM HYDROWHEY",
	description: "Hydrolyzed, Quick Digesting",
};
const naturalGold = {
	image: "naturalgold1",
	proName: "NATURALLY FLAVORED GOLD STANDARD 100% WHEY",
	description: "No Artificial Flavors, Sweeteners or Colors",
};
const performance = {
	image: "performance1",
	proName: "PERFORMANCE WHEY",
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
const products = productImgs.map((item) => require("./assets/" + item.image + ".png"));
function productCards() {
	var i;
	let cards = [];
	for (i = 0; i < products.length; i++) {
		cards[i] = (
			<Card style={{ margin: "10px 20px 10px 20px" }}>
				<Card.Img
					variant="top"
					src={products[i]}
					style={{
						width: "208px",
						height: "180px",
					}}
				></Card.Img>
				<Card.Body>
					<Card.Title>{productImgs[i].proName}</Card.Title>
					<Card.Text>{productImgs[i].description}</Card.Text>
				</Card.Body>
			</Card>
		);
	}
	return cards;
}
function Protein() {
	return (
		<div className="main-div">
			<Header1></Header1>
			<div className="minor-div">
				<div className="product-sort-div">
					<Nav>
						<NavDropdown title="Category">
							<NavDropdown.Item>Concentrate(WPC)</NavDropdown.Item>
							<NavDropdown.Item>Isolate(WPI)</NavDropdown.Item>
							<NavDropdown.Item>Hydrolysate(WPH)</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Price">
							<NavDropdown.Item>Less Than $10</NavDropdown.Item>
							<NavDropdown.Item>$10-$50</NavDropdown.Item>
							<NavDropdown.Item>Above $50</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Ranking">
							<NavDropdown.Item>Price(Low to high)</NavDropdown.Item>
							<NavDropdown.Item>Price(High to low)</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</div>
				<div className="products-div">{productCards()}</div>
			</div>
		</div>
	);
}

export default Protein;

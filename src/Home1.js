import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header1 from "./Header1.js";
import Products from "./Products";
import Information from "./Information";
//^^^^^import area

//Carousel
let slideImgs = ["carouselImg1", "carouselImg2", "carouselImg3", "carouselImg4"];
const slides = slideImgs.map((item) => require("./assets/" + item + ".png"));

function slideCards() {
	var x;
	let slideCards = [];
	for (x = 0; x < slides.length; x++) {
		slideCards[x] = (
			<Carousel.Item interval={1000} key={x}>
				<img className={`slide${x}`} src={slides[x]} alt="" />
			</Carousel.Item>
		);
	}
	return slideCards;
}

function Home1() {
	return (
		<div className="home-div">
			<Header1></Header1>
			<Carousel className="carousel">{slideCards()}</Carousel>

			<h1 className="bestSellerTitle">--- BEST SELLERS ---</h1>
			<div className="bestSeller-div">
				<Products isBestSeller="true"></Products>
				<Link to="/popular">
					<Button variant="dark" className="viewAllButton">
						View All
					</Button>
				</Link>
			</div>

			<h1 className="bestSellerTitle">--- Protein ---</h1>
			<div className="bestSeller-div">
				<Products isProtein="true"></Products>
				<Link to="/protein">
					<Button variant="dark" className="viewAllButton">
						View All
					</Button>
				</Link>
			</div>

			<h1 className="bestSellerTitle">--- Snack ---</h1>
			<div className="bestSeller-div">
				<Products isSnack="true"></Products>
				<Link to="/snack">
					<Button variant="dark" className="viewAllButton">
						View All
					</Button>
				</Link>
			</div>

			<h1 className="bestSellerTitle">--- Shaker ---</h1>
			<div className="bestSeller-div">
				<Products isShaker="true"></Products>
				<Link to="/shaker">
					<Button variant="dark" className="viewAllButton">
						View All
					</Button>
				</Link>
			</div>

			{/* <Information /> */}
		</div>
	);
}

export default Home1;

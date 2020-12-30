import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import "./Home1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header1 from "./Header1.js";
import Products from "./Products";
//^^^^^import area

//Carousel
let slideImgs = ["carouselImg1", "carouselImg2"];
const slides = slideImgs.map((item) => require("./assets/" + item + ".png"));

function slideCards() {
	var x;
	let slideCards = [];
	for (x = 0; x < slides.length; x++) {
		slideCards[x] = (
			<Carousel.Item interval={200} key={x}>
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
			<h1 className="recommendation">BEST SELLERS</h1>

			{/* <CardGroup className="homepageProducts">{productCards()}</CardGroup> */}
			<Products></Products>
		</div>
	);
}

export default Home1;

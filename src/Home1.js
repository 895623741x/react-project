import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header1 from "./Header1.js";
import Products from "./Products";
//^^^^^import area

//Carousel
let slideImgs = ["carouselImg1", "carouselImg2", "carouselImg3", "carouselImg4"];
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

			<div className="bestSeller-div">
				<Products></Products>
				<Link>
					<Button variant="dark" className="viewAllButton">
						View All
					</Button>
				</Link>
			</div>

			<div className="information-div">
				<div className="service-div">
					<h5 className="item">Service</h5>
					<Link to="/contact" className="item">
						Contact Us
					</Link>
					<Link to="/delivery" className="item">
						Delivery Information
					</Link>
					<Link to="/return_policy" className="item">
						Return Policy
					</Link>
				</div>
				<div className="about-div">
					<h5 className="item">About Us</h5>
					<Link to="story" className="item">
						Brand Story
					</Link>
					<Link to="partners" className="item">
						Partners
					</Link>
					<Link to="careers" className="item">
						Careers
					</Link>
				</div>
				<div className="socialMedia-div">
					<h5 className="item">Follow Us</h5>
				</div>
			</div>
		</div>
	);
}

export default Home1;

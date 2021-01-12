import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Information.css";

function Information() {
	return (
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
	);
}

export default Information;

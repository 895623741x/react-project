import React, { useState } from "react";
import {
	Carousel,
	Media,
	Card,
	Nav,
	NavDropdown,
	Button,
	Form,
	FormControl,
	FormGroup,
	CardGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Snack.css";
import Header1 from "../Header1";
import { rankedSnacks } from "../data";

const initialState = rankedSnacks;

function Snack() {
	const [data, updateData] = useState(initialState);

	const lowHigh = (a, b) => {
		return a.price - b.price;
	};
	const highLow = (a, b) => {
		return b.price - a.price;
	};

	return (
		<div className="main-div">
			<Header1></Header1>
			<div className="minor-div">
				<div className="product-sort-div">
					<Nav>
						{/* <NavDropdown title="Category">
							<NavDropdown.Item>Concentrate(WPC)</NavDropdown.Item>
							<NavDropdown.Item>Isolate(WPI)</NavDropdown.Item>
							<NavDropdown.Item>Hydrolysate(WPH)</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Price">
							<NavDropdown.Item>Less Than $10</NavDropdown.Item>
							<NavDropdown.Item>$10-$50</NavDropdown.Item>
							<NavDropdown.Item>Above $50</NavDropdown.Item>
						</NavDropdown> */}
						<NavDropdown title="Popularity">
							<NavDropdown.Item onClick={() => updateData([...data].sort(lowHigh))}>Price(Low to high)</NavDropdown.Item>
							<NavDropdown.Item onClick={() => updateData([...data].sort(highLow))}>Price(High to low)</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</div>

				<div className="products-div">
					{data.map((p, i) => (
						<Card>
							<Card.Img variant="top" src={p.image} />
							<Card.Body>
								<Card.Title>{p.proName}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
							</Card.Body>
							<Card.Body>
								<h5>${p.price}</h5>
								<br />
								<h5>Popularity: {p.popularity}</h5>
								<br />
							</Card.Body>

							<Button>Add to Cart</Button>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default Snack;

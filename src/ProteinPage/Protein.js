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
import "./Protein.css";
import Header1 from "../Header1";
import { products } from "./ProteinProducts";

const initialState = products;

function Protein() {
	const [data, updateData] = useState(initialState);

	const lowHigh = (a, b) => {
		return a.price - b.price;
	};
	const highLow = (a, b) => {
		return b.price - a.price;
	};

	const sortFunction = () => {
		let listItems = [];
		for (let i = 0; i < data.length; i++) {
			listItems[i] = (
				<Card>
					<Card.Img variant="top" src={data[i].image} />
					<Card.Body>
						<Card.Title>{data[i].proName}</Card.Title>
						<Card.Text>{data[i].description}</Card.Text>
						<Card.Text>{data[i].price}</Card.Text>
					</Card.Body>
					<Button>Add to Cart</Button>
				</Card>
			);
		}
		return listItems;
	};
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
								<Card.Text>{p.price}</Card.Text>
							</Card.Body>
							<Button>Add to Cart</Button>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default Protein;

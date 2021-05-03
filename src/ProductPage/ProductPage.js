import React, { useState } from "react";
import { Carousel, Media, Card, Nav, NavDropdown, Dropdown, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import Header1 from "../Header1";
import Product from "../Product";

function ProductPage({ productType, productName }) {
	const initialState = productType;

	const [data, updateData] = useState(initialState);

	const popularityDescending = (a, b) => {
		return b.popularity - a.popularity;
	};
	const ascending = (a, b) => {
		return a.price - b.price;
	};
	const descending = (a, b) => {
		return b.price - a.price;
	};

	const setPriceInterval = (a, b) => {
		let itemList = [...initialState];
		if (b === 0) {
			updateData([...itemList].filter((c) => c.price < a));
		} else if (a === 0) {
			updateData([...itemList].filter((c) => c.price > b));
		} else {
			updateData([...itemList].filter((c) => c.price >= a && c.price < b));
		}
	};

	const updatePriceInterval = (x, y) => {
		setPriceInterval(x, y);
	};

	return (
		<div className="main-div">
			<Header1></Header1>
			<h1 className="title">{productName}</h1>
			<div className="minor-div">
				<div className="productSort-div">
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
						<NavDropdown title="Sorted by">
							<NavDropdown.Item onClick={() => updateData([...data].sort(popularityDescending))}>
								Popularity(Low to high)
							</NavDropdown.Item>
							<NavDropdown.Item onClick={() => updateData([...data].sort(ascending))}>Price(Low to high)</NavDropdown.Item>
							<NavDropdown.Item onClick={() => updateData([...data].sort(descending))}>Price(High to low)</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</div>

				<div className="display-div">
					<div className="optionBox-div">
						<h2>Price</h2>
						<hr />

						<Form.Group>
							<Form.Check type="radio" label="Less than $10" onClick={() => updatePriceInterval(10, 0)} name="priceOption" />
							<Form.Check type="radio" label="$10-$25" name="priceOption" onClick={() => updatePriceInterval(10, 25)} />
							<Form.Check type="radio" label="$25-$40" name="priceOption" onClick={() => updatePriceInterval(25, 40)} />
							<Form.Check type="radio" label="More than $40" name="priceOption" onClick={() => updatePriceInterval(0, 40)} />
						</Form.Group>
					</div>

					<div className="products-div">
						{data.length === 0 ? (
							<h5>No item found</h5>
						) : (
							data.map((p) => (
								<Product
									id={p.id}
									name={p.proName}
									image={p.image}
									gallery={p.gallery}
									price={p.price}
									description={p.description}
									number={p.number}
									popularity={p.popularity}
									width="250px"
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;

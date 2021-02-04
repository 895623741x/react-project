import React, { useState } from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import Modal from "react-modal";

import Gallery from "react-amazon-gallery";
import { useStateValue } from "./StateProvider";
import ClearIcon from "@material-ui/icons/Clear";
import "./product.css";
import { requirePropFactory } from "@material-ui/core";

function Product({ id, name, image, price, description, number, popularity, gallery }) {
	const [{ basket }, dispatch] = useStateValue();

	const isChecked = false;

	const [isModalOpen, updateModalOpen] = useState(isChecked);
	// const [click, updateClick] = useState(false);
	// const clicked = click;
	const addToCart = () => {
		// updateClick(true);
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				name: name,
				image: image,
				price: price,
				description: description,
				number: number,
			},
		});
	};

	return (
		<CardGroup className="cards">
			<Card className="productCard" key={id} style={{ width: "16rem" }}>
				<Card.Img variant="top" src={image} onClick={() => updateModalOpen(true)} />
				<Card.Body>
					<Card.Title> {name}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>

				<b>${price}</b>
				<b>Popularity: {popularity}</b>
				<Button onClick={addToCart}>ADD TO CART</Button>
			</Card>

			{/* <ProductDetail isOpen={isModalOpen} name={name} description={description} /> */}

			<Modal
				isOpen={isModalOpen}
				style={{
					content: {
						width: "800px",
						height: "500px",
						margin: "50px 200px 100px 200px",
					},
				}}
			>
				<ClearIcon className="clearIcon" onClick={() => updateModalOpen(false)} />
				<h3>{name}</h3>
				<div className="modal-overview">
					{/* <img className="modal-image" src={image}></img> */}
					<Gallery images={gallery.map((a) => require("" + a))} />
					<div className="modal-description">
						<h5>{description}</h5>
						<b>${price}</b>
						<b>Popularity: {popularity}</b>
						<Button onClick={addToCart}>Add To Cart</Button>
					</div>
				</div>
			</Modal>
		</CardGroup>
	);
}

export default Product;

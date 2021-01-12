import React, { useState } from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import image1 from "./assets/athle.jpg";

const Product = ({ id, name, image, price, description, number, popularity, width }) => {
	const [{ basket }, dispatch] = useStateValue();
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
		<Card key={id} style={{ width: width }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
			<b>${price}</b>
			<b>Popularity: {popularity}</b>
			<Button onClick={addToCart}>ADD TO CART</Button>
		</Card>
	);
};

export default Product;

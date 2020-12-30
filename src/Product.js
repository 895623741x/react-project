import React from "react";
import { Carousel, Media, Card, CardGroup, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import image1 from "./assets/athle.jpg";

const Product = ({ id, name, image, price, description, number, popularity }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addToCart = () => {
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
		<Card key={id}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{description}
					<br />
					<b>${price}</b>
				</Card.Text>
			</Card.Body>
			<p>{popularity}</p>
			<Button onClick={addToCart}>ADD TO CART</Button>
		</Card>
	);
};

export default Product;

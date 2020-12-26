import React from "react";
import Gallery from "react-amazon-gallery";
import image1 from "../assets/goldcasein1.png";
function AmazonGallery() {
	return (
		<div className="amazonGallery">
			<Gallery images={image1}></Gallery>
		</div>
	);
}

export default AmazonGallery;

import React, { useState } from "react";
import Modal from "react-modal";
import ClearIcon from "@material-ui/icons/Clear";
import "./ProductDetail.css";

function ProductDetail(props) {
	return (
		<div>
			<Modal isOpen={props.isOpen}>
				<h1>{props.name}</h1>
				<h2>{props.description}</h2>
			</Modal>
		</div>
	);
}

export default ProductDetail;

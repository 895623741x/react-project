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

import Header1 from "../Header1";
import Product from "../Product";
import { rankedSnacks } from "../data";
import ProductPage from "./ProductPage";

const initialState = rankedSnacks;

function Snack() {
	return <ProductPage productType={rankedSnacks} productName="Snacks" />;
}

export default Snack;

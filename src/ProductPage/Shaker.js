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
import { rankedShakers } from "../data";
import ProductPage from "./ProductPage";
const initialState = rankedShakers;

function Shaker() {
	return <ProductPage productType={rankedShakers} />;
}

export default Shaker;

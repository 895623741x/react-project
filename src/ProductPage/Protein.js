import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { rankedProtein } from "../data";
import ProductPage from "./ProductPage";

function Protein() {
	return <ProductPage productType={rankedProtein} productName="Protein" />;
}

export default Protein;

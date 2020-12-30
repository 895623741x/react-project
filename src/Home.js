// import React, { Component } from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import {
// 	RecoilRoot,
// 	atom,
// 	selector,
// 	useRecoilState,
// 	useRecoilValue,
// } from "recoil";
// import Header1 from "./Header1";
// import AddToCartButton from "./Buttons/AddToCartButton";
// import CheckoutButton from "./Buttons/CheckoutButton";
// import AmazonGallery from "./AmazonGallery/AmazonGallery";
// import NewProductOverview from "./NewProductOverview/NewProductOverview";

// import "react-alice-carousel/lib/alice-carousel.css";

// class Home extends Component {
// 	state = {
// 		overviewNum: 0,
// 	};

// 	render() {
// 		// overviewNumHandler is a default handler
// 		const overviewNumHandler = () => {
// 			let num = 0;
// 			if (this.state.overviewNum === 0) {
// 				this.setState({ overviewNum: num });
// 			} else if (this.state.overviewNum === 1) {
// 				this.setState({ overviewNum: num });
// 			}
// 		};
// 		// console.log(this.state.overviewNum); for debugging overviewNum
// 		const factNumHandler = () => {
// 			let num = 0;
// 			if (this.state.overviewNum === 1) {
// 				// num = this.state.overviewNum - 1;
// 				// this.setState({overviewNum: num});
// 				return;
// 			} else if (this.state.overviewNum === 0) {
// 				num = this.state.overviewNum + 1;
// 				this.setState({ overviewNum: num });
// 			}
// 		};

// 		return (
// 			<div className="home">
// 				<Header1></Header1>
// 				<div className="home_section1">
// 					<div className="section1_content1">
// 						<h1>Iron Protein</h1>
// 						<h3>Always provide the best for our customers</h3>
// 						<div className="content1_links">
// 							<Link className="content1_link1">
// 								what's new
// 							</Link>
// 							<Link className="content1_link2">
// 								enter the shop
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="home_section2">
// 					<div className="product_and_gallery">
// 						<div className="gallery">
// 							<AmazonGallery></AmazonGallery>
// 						</div>
// 						<div className="product">
// 							<div className="product_content">
// 								<h4>NEW!!</h4>
// 								<h1>GOLD STANDARD 100% ISOLATE</h1>
// 								<div className="perServing">
// 									<span className="span_protein">
// 										PROTEIN
// 									</span>
// 									<span className="span_protein_gram">
// 										25 g
// 									</span>
// 									<span className="span_bcaa">
// 										BCAA
// 									</span>
// 									<span className="span_bcaa_gram">
// 										5.5 g
// 									</span>
// 									<span className="span_carb">
// 										CARB
// 									</span>
// 									<span className="span_carb_gram">
// 										25 g
// 									</span>
// 								</div>
// 								<div className="weight_and_price">
// 									<span className="weight">
// 										5 lb
// 									</span>
// 									<span className="price">
// 										$ 30.99
// 									</span>
// 								</div>
// 								<div className="product_buttons">
// 									<AddToCartButton></AddToCartButton>
// 									<CheckoutButton></CheckoutButton>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="section2_content2">
// 						<div className="section2_content2_tags">
// 							<button
// 								className="section2_content2_overview_tag"
// 								onClick={overviewNumHandler}
// 							>
// 								Overview
// 							</button>
// 							<button
// 								className="section2_content2_fact_tag"
// 								onClick={factNumHandler}
// 							>
// 								Nutrition Fact
// 							</button>
// 						</div>
// 						{/* {(this.state.overviewNum === 1) ? (
//                             ): <div></div>} */}
// 						<div className="section2_content2_overview">
// 							<NewProductOverview
// 								clicked={this.state.overviewNum}
// 							></NewProductOverview>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Home;

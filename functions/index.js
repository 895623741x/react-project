// 1. API
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51IRCF2DWpxS6go0hgacP4BmmHloiPXqIcd5XBwCqEzpiZTKzNhT5HxquaAdlN8zQraYeNzSGUaQBY6p8pYs0Xl8b00DBb4XC9j"
);
const data = require("./data");
// 2. App config

const app = express();

// 3. Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// 4. API routes

app.get("/", (request, response) => {
	response.status(200).send("hello world");
});

// payment/create
app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("payment request received boom!!! for this amount >>>", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency,
		currency: "usd",
	});
	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// products
app.get("/products", (request, response) => {
	response.status(202).send(data);
});

// 5. Listen Command

exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/ecommerce-project-71605/us-central1/api

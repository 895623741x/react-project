const data = {
	products: [
		//protein
		{
			id: 1,
			image: "./assets/collagenacid1.png",
			gallery: ["./assets/collagenacid1.png", "./assets/collagenacid2.png", "./assets/collagenacid3.png"],
			proName: "COLLANGEN + HYALURONIC ACID",
			price: 39.99,
			description: "Supports Healty Skin, Hair, &Joints",
			number: 1,
			popularity: 20,
			type: "protein",
		},
		{
			id: 2,
			image: "./assets/goldcasein1.png",
			gallery: ["./assets/goldcasein1.png", "./assets/goldcasein2.jpg"],
			proName: "GOLD STANDARD 100% CASEIN",
			price: 35.99,
			description: "Slow-Digesting Protein for Overnight Muscle Recovery",
			number: 1,
			popularity: 85,
			type: "protein",
		},
		{
			id: 3,
			image: "./assets/goldplant1.png",
			gallery: ["./assets/goldplant1.png", "./assets/goldplant2.jpg", "./assets/goldplant3.jpg"],
			proName: "GOLD STANDARD 100% PLANT",
			price: 30.99,
			description: "Organic, Plant-Based Protein",
			number: 1,
			popularity: 77,
			type: "protein",
		},
		{
			id: 4,
			image: "./assets/goldproteindrink1.png",
			gallery: ["./assets/goldproteindrink1.png", "./assets/goldproteindrink2.jpg", "./assets/goldproteindrink3.jpg"],
			proName: "GOLD STANDARD 100%  WHEY PROTEIN DRINK",
			price: 34.99,
			description: "Muscle Recovery On the Go",
			number: 1,
			popularity: 65,
			type: "snack",
		},
		{
			id: 5,
			image: "./assets/goldstandard1.png",
			gallery: [
				"./assets/goldstandard1.png",
				"./assets/goldstandard2.png",
				"./assets/goldstandard3.png",
				"./assets/goldstandard4.png",
				"./assets/goldstandard5.png",
			],
			proName: "GOLD STANDARD 100% WHEY",
			price: 9.99,
			description: "Post-Workout Muscle Support & Recovery",
			number: 1,
			popularity: 22,
			type: "protein",
		},
		{
			id: 6,
			image: "./assets/hydrowhey1.png",
			gallery: ["./assets/collagenacid1.png", "./assets/collagenacid2.png", "./assets/collagenacid3.png"],
			proName: "PLATINUM HYDROWHEY",
			price: 34.99,
			description: "Hydrolyzed, Quick Digesting",
			number: 1,
			popularity: 52,
			type: "protein",
		},
		{
			id: 7,
			image: "./assets/naturalgold1.png",
			gallery: ["./assets/naturalgold1.png", "./assets/naturalgold2.jpg"],
			proName: "NATURALLY FLAVORED GOLD STANDARD 100% WHEY",
			price: 30.99,
			description: "No Artificial Flavors, Sweeteners or Colors",
			number: 1,
			popularity: 42,
			type: "protein",
		},
		{
			id: 8,
			image: "./assets/performance1.png",
			gallery: ["./assets/performance1.png", "./assets/performance2.jpg"],
			proName: "PERFORMANCE WHEY",
			price: 47.99,
			description: "Concentrated Protein Complex",
			number: 1,
			popularity: 32,
			type: "protein",
		},
		{
			id: 9,
			image: "./assets/impactwhey1.jpg",
			gallery: ["./assets/impactwhey1.jpg", "./assets/impactwhey2.jpg"],
			proName: "IMPACT WHEY PROTEIN",
			price: 11.99,
			description: "Our #1 protein powder for your everyday nutrition!",
			number: 1,
			popularity: 10,
			type: "protein",
		},
		{
			id: 10,
			image: "./assets/thewhey1.jpg",
			gallery: ["./assets/thewhey1.jpg"],
			proName: "THE WHEY",
			price: 50.99,
			description: "Scientifically proven protein to help you achieve your goals",
			number: 1,
			popularity: 25,
			type: "protein",
		},
		{
			id: 11,
			image: "./assets/veteranisolate1.jpg",
			gallery: ["./assets/veteranisolate1.jpg"],
			proName: "VETERANS DAY IMPACT WHEY ISOLATE",
			price: 52.99,
			description: "HAPPY VETERANS DAY!",
			number: 1,
			popularity: 20,
			type: "protein",
		},
		{
			id: 12,
			image: "./assets/weightgainer1.jpg",
			gallery: ["./assets/weightgainer1.jpg", "./assets/weightgainer2.jpg"],
			proName: "Weight Gainer Blend",
			price: 47.99,
			description: "The perfect way to increase strength and size",
			number: 1,
			popularity: 35,
			type: "protein",
		},
		// snacks
		{
			id: 13,
			image: "./assets/chips1.jpg",
			gallery: ["./assets/chips1.jpg", "./assets/chips2.jpg"],
			proName: "Protein Chips",
			price: 25.99,
			description: "High Protein, 120 Cal snack",
			number: 1,
			popularity: 70,
			type: "snack",
		},
		{
			id: 14,
			image: "./assets/laybar1.jpg",
			gallery: ["./assets/laybar1.jpg", "./assets/laybar2.jpg"],
			proName: "Layered Bar",
			price: 44.99,
			description: "High-protein, multi-layered indulgence",
			number: 1,
			popularity: 105,
			type: "snack",
		},
		{
			id: 15,
			image: "./assets/wafer1.jpg",
			gallery: ["./assets/wafer1.jpg", "./assets/wafer2.jpg", "./assets/wafer3.jpg"],
			proName: "Protein Wafer",
			price: 33.99,
			description: "The lighter protein-packed treat, ideal any time of day",
			number: 1,
			popularity: 77,
			type: "snack",
		},
		{
			id: 16,
			image: "./assets/veganbar1.jpg",
			gallery: ["./assets/veganbar1.jpg", "./assets/veganbar2.jpg"],
			proName: "Vegan Protein Bar",
			price: 29.99,
			description: "Delicious high-protein snack, naturally flavored and sweetened",
			number: 1,
			popularity: 87,
			type: "snack",
		},
		{
			id: 17,
			image: "./assets/nutsbar1.jpg",
			gallery: ["./assets/nutsbar1.jpg"],
			proName: "NUTS Bar",
			price: 23.99,
			description: "The crunchy, high-protein snack",
			number: 1,
			popularity: 52,
			type: "snack",
		},

		//shakers
		{
			id: 18,
			image: "./assets/metalshaker1.jpg",
			gallery: ["./assets/metalshaker1.jpg", "./assets/metalshaker2.jpg"],
			proName: "Metal Shaker",
			price: 17.99,
			description: "The perfect alternative to plastic shakers — lump-free shakes every time",
			number: 1,
			popularity: 12,
			type: "shaker",
		},
		{
			id: 19,
			image: "./assets/shaker1.jpg",
			gallery: ["./assets/shaker1.jpg", "./assets/shaker2.jpg"],
			proName: "Protein Shaker",
			price: 7.99,
			description: "Plastic protein shaker",
			number: 1,
			popularity: 2,
			type: "shaker",
		},
		{
			id: 20,
			image: "./assets/proshaker1.jpg",
			gallery: ["./assets/proshaker1.jpg", "./assets/proshaker2.jpg"],
			proName: "Pro Metal Shaker",
			price: 11.99,
			description: "The perfect alternative to plastic shakers — lump-free shakes every time",
			number: 1,
			popularity: 70,
			type: "shaker",
		},
		{
			id: 21,
			image: "./assets/minishaker1.jpg",
			gallery: ["./assets/minishaker1.jpg", "./assets/minishaker2.jpg"],
			proName: "Mini Metal Shaker",
			price: 12.99,
			description: "The perfect alternative to plastic shakers — lump-free shakes every time",
			number: 1,
			popularity: 25,
			type: "shaker",
		},
		{
			id: 22,
			image: "./assets/strongshaker1.jpg",
			gallery: ["./assets/strongshaker1.jpg", "./assets/strongshaker2.jpg"],
			proName: "Stronger Together Shaker- Icicle",
			price: 22.99,
			description: "Refuel your mind as you refuel your body",
			number: 1,
			popularity: 10,
			type: "shaker",
		},
		{
			id: 23,
			image: "./assets/shakesphere1.jpg",
			gallery: ["./assets/shakesphere1.jpg", "./assets/shakesphere2.jpg"],
			proName: "Pro ShakeSphere Shaker – Black – 700ml",
			price: 33.99,
			description: "Premium matte black design with advanced mixing",
			number: 1,
			popularity: 35,
			type: "shaker",
		},
	],
};

module.exports = data;

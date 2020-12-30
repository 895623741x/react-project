import image1 from "./assets/goldcasein1.png";
export const initialState = {
	basket: [
		{
			id: 1,
			name: "good",
			image: { image1 },
			price: 200,
			description: "good",
			number: 2,
			isClicked: true,
		},
		{
			id: 11,
			name: "kkk",
			image: { image1 },
			price: 400,
			description: "kkkk",
			number: 3,
			isClicked: true,
		},
	],
	user: null,
};

export const getBasketSubtotal = (basket) => basket?.reduce((amount, item) => item.price * item.number + amount, 0);

const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			//logic for adding items to basket
			let newBasket1 = [...state.basket];
			const index1 = state.basket.findIndex((basketItem1) => basketItem1.id === action.id);
			if (index1 >= 0) {
				newBasket1[index1].number += 1;
				return { ...state, basket: newBasket1 };
			} else {
				return {
					...state,
					basket: [...state.basket, action.item],
				};
			}

		// oritinal code
		// return {
		// 	...state,
		// 	basket: [...state.basket, action.item],
		// };
		// not original code
		// return {
		// 	...state,
		// 	basket: newBasket1,
		// };

		case "REMOVE_FROM_BASKET":
			//logic for removing items from cart
			let newBasket = [...state.basket];
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
			console.log(index);
			if (index >= 0) {
				//Item is in the cart
				newBasket.splice(index, 1);
			} else {
				console.warn(`item ${index} is not in the cart`);
			}
			return { ...state, basket: newBasket };

		default:
			return state;
	}
};

export default Reducer;

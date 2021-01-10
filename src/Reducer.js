import image1 from "./assets/goldcasein1.png";
export const initialState = {
	basket: [],
	user: null,
};

export const getBasketSubtotal = (basket) => basket?.reduce((amount, item) => item.price * item.number + amount, 0);

const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			//logic for adding items to basket
			const newBasket1 = [...state.basket];
			const index1 = state.basket.findIndex((basketItem1) => basketItem1.id === action.item.id);

			if (index1 >= 0 && state.basket[index1].number >= 1) {
				newBasket1[index1].number += 1;
				return { ...state, basket: newBasket1 };
			} else {
				return {
					...state,
					basket: [...state.basket, action.item],
				};
			}

		case "INCREASE_TO_BASKET":
			let newBasket3 = [...state.basket];
			const index3 = state.basket.findIndex((basketItem) => basketItem.id === action.id);
			if (index3 >= 0 && state.basket[index3].number >= 1) {
				newBasket3[index3].number += 1;
			} else if (index3 >= 0 && state.basket[index3].number === 1) {
				newBasket2.splice(index3, 1);
			}
			return { ...state, basket: newBasket3 };

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

		case "DECREASE_FROM_BASKET":
			let newBasket2 = [...state.basket];
			const index2 = state.basket.findIndex((basketItem) => basketItem.id === action.id);
			if (index2 >= 0 && state.basket[index2].number > 1) {
				newBasket2[index2].number -= 1;
			} else if (index2 >= 0 && state.basket[index2].number === 1) {
				newBasket2.splice(index2, 1);
			}
			return { ...state, basket: newBasket2 };

		default:
			return state;
	}
};

export default Reducer;

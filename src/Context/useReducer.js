import data from "./FakeData.json";

const initialState = {
	products: data,
	inCart: [],
};

const useReducerFun = (state = initialState, action) => {
	switch (action.type) {
		case "ADDCART":
			return {
				...state,
				inCart: [...state.inCart, action.payload],
			};

		case "INCREMENT_COUNT":
			return {
				...state,
				inCart: state?.inCart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {...cartItem, count: cartItem.count + 1}
						: {...cartItem}
				),
			};

		case "DECREMENT_COUNT":
			return {
				...state,
				inCart: state?.inCart.map((cartItem) =>
					cartItem.id === action.payload.id
						? {...cartItem, count: cartItem.count - 1}
						: {...cartItem}
				),
			};

		case "REMOVE_ITEM":
			return {
				...state,
				inCart: state?.inCart.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export {useReducerFun, initialState};

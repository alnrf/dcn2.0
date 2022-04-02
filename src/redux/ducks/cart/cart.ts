// ACTION TYPES
const ADD_ITEM = "ADD_ITEM";
const INCREASE_ITEM = "INCREASE_ITEM";
const DECREASE_ITEM = "DECREASE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: state?.cart.length
          ? [...state.cart, action.payload]
          : [action.payload],
      };
    case INCREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((prod: any) =>
          prod?.id === action.payload
            ? {
                ...prod,
                quantity: prod?.quantity + 1,
                totalAmount: prod?.amount * prod?.quantity,
              }
            : prod
        ),
      };
    case DECREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((prod: any) =>
          prod?.id === action.payload
            ? {
                ...prod,
                quantity: prod?.quantity !== 1 ? prod.quantity - 1 : 1,
                totalAmount: prod?.amount * prod?.quantity,
              }
            : prod
        ),
      };
    case DELETE_ITEM:
      const newPayload = state.cart.filter(
        (item: any) => item?.id !== action.payload
      );
      return {
        ...state,
        cart: newPayload,
      };
    default:
      return state;
  }
}

export const addItemToCart = (payload: any) => ({
  type: ADD_ITEM,
  payload,
});

export const increaseCartItem = (payload: any) => ({
  type: INCREASE_ITEM,
  payload,
});
export const decreaseCartItem = (payload: any) => ({
  type: DECREASE_ITEM,
  payload,
});

export const deleteItemFromCart = (payload: any) => ({
  type: DELETE_ITEM,
  payload,
});

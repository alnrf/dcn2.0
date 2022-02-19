// ACTION TYPES
const GET_ORDER_LIST = "GET_ORDER_LIST";
const GET_ORDER = "GET_ORDER";

const initialState = {
  orders: [{}],
  order: [{}],
};

export default function orderReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_ORDER_LIST:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}

export const getOrdersList = (payload: any) => ({
  type: GET_ORDER_LIST,
  payload,
});

export const getSingleOrder = (payload: any) => ({
  type: GET_ORDER,
  payload,
});

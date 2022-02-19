// ACTION TYPES
const SET_CATEGORY = "SET_CATEGORY";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORY_PRODUCTS = "SET_CATEGORY_PRODUCTS";

const initialState = {
  categories: [{}],
  products: [{}],
  productList: [{}],
};

// Reducer

export default function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
}

// Action Creators

export const setCategory = (payload: any) => ({
  type: SET_CATEGORY,
  payload,
});

export const setProducts = (payload: any) => ({
  type: SET_PRODUCTS,
  payload,
});

export const setCategoryProducts = (payload: any) => ({
  type: SET_CATEGORY_PRODUCTS,
  payload,
});

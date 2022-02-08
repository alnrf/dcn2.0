// ACTION TYPES
const SET_AUTH_INFO = "SET_AUTH_INFO";
const SET_CUSTOMER_INFO = "SET_CUSTOMER_INFO";
const SET_SETTINGS = "SET_SETTINGS";
const SET_LOGGED = "SET_LOGGED";

const initialState = {
  authInfo: {},
  customer: {},
  settings: {},
  isLogged: false
};

// Reducer

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    case SET_CUSTOMER_INFO:
      return {
        ...state,
        customer: action.payload,
      };

    case SET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
      case SET_SETTINGS:
        return {
          ...state,
          isLogged: true,
        };
    default:
      return state;
  }
}

// Action Creators

export const setToken = (payload: any) => ({
  type: SET_AUTH_INFO,
  payload,
});

export const setCustomer = (payload: any) => ({
  type: SET_CUSTOMER_INFO,
  payload,
});
export const setSettings = (payload: any) => ({
  type: SET_SETTINGS,
  payload,
});
export const setIsLogged = (payload: any) => ({
  type: SET_LOGGED,
  payload,
});

import { CURRENCIES_LOADED, LOAD_CURRENCIES } from "./actions";

const initialState = {
  isLoading: false,
  currencies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return {
        ...state,
        isLoading: true,
      };

    case CURRENCIES_LOADED:
      return {
        ...state,
        isLoading: false,
        currencies: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
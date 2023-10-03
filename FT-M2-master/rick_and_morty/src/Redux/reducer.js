import { ADD_FAV, REMOVE_FAV } from './actions-types';

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        // concat
        myFavorites: state.myFavorites.concat(action.payload),
        // spread operator
        // myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        // Number
        myFavorites: state.myFavorites.filter((fav) => fav.id !== Number(action.id)),

        // parseInt
        // myFavorites: state.myFavorites.filter((fav) => fav.id !== parseInt(action.id)),

        // + - unary operator
        // myFavorites: state.myFavorites.filter((fav) => fav.id !== +action.id),

      };

    default:
      return state;
  }
}

export default rootReducer;

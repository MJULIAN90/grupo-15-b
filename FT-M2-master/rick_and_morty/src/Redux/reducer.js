import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions-types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        // spread operator
        // myFavorites: [...state.myFavorites, action.payload],
        // concat
        allCharacters: state.allCharacters.concat(action.payload),
        myFavorites: state.myFavorites.concat(action.payload),
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

    case FILTER: 
      return{
        ...state,
        myFavorites: state.allCharacters.filter((character) => character.gender === action.payload)
      }

    case ORDER:
      console.log(action.payload);
      if (action.payload === "A"){
        return {
          ...state,
          // myFavorites: state.allCharacters.sort((a, b) => a.name.localeCompare(b.name))
          myFavorites: state.allCharacters.sort((a, b) => a.name > b.name ? 1 : -1)
        }
      } else{
        return {
          ...state,
          // myFavorites: state.allCharacters.sort((a, b) => b.name.localeCompare(a.name))
          myFavorites: state.allCharacters.sort((a, b) => b.name > a.name ? 1 : -1)
        }
      }
    default:
      return state;
  }
}

export default rootReducer;

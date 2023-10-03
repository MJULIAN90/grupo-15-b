import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const addFav  = (payload) => ({ type: ADD_FAV, payload });

const removeFav = (id) => ({ type: REMOVE_FAV, id });

export { addFav, removeFav };
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const addFav  = (payload) => ({ type: ADD_FAV, payload });

const removeFav = (id) => ({ type: REMOVE_FAV, id });

const filter = (payload) => ({ type: FILTER, payload });

const order = (payload) => ({ type: ORDER, payload });

export { addFav, removeFav, filter, order };
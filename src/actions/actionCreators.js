import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_ITEMSCAT_REQUEST,
  GET_ITEMSCAT_FAILURE,
  GET_ITEMSCAT_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_HIT_REQUEST,
  GET_HIT_FAILURE,
  GET_HIT_SUCCESS,
} from './actionTypes';

export const getItemsCatRequest = (id) => ({
  type: GET_ITEMSCAT_REQUEST,
  payload: { id },
});

export const getItemsCatFailure = errorItemsCat => ({
  type: GET_ITEMSCAT_FAILURE,
  payload: { errorItemsCat },
});

export const getItemsCatSuccess = itemsCat => ({
  type: GET_ITEMSCAT_SUCCESS,
  payload: { itemsCat },
});
export const getItemsRequest = () => ({
  type: GET_ITEMS_REQUEST,
});

export const getItemsFailure = error => ({
  type: GET_ITEMS_FAILURE,
  payload: { error },
});

export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  payload: { items },
});
export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getCategoriesFailure = errorCat => ({
  type: GET_CATEGORIES_FAILURE,
  payload: { errorCat },
});

export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const getHitRequest = () => ({
  type: GET_HIT_REQUEST,
});

export const getHitFailure = errorHit => ({
  type: GET_HIT_FAILURE,
  payload: { errorHit },
});

export const getHitSuccess = hits => ({
  type: GET_HIT_SUCCESS,
  payload: { hits },
});
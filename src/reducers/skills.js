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
} from '../actions/actionTypes'

const initialState = {
  items: [],
  categories: [],
  hits: [],
  loading: false,
  error: null,
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ITEMSCAT_REQUEST:
      const { id } = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ITEMSCAT_FAILURE:
      const { errorItemsCat } = action.payload;
      return {
        ...state,
        loading: false,
        errorItemsCat,
      };
    case GET_ITEMSCAT_SUCCESS:
      const { itemsCat } = action.payload;
      return {
        ...state,
        items: itemsCat,
        loading: false,
        error: null,
      };

    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ITEMS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_ITEMS_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORIES_FAILURE:
      const { errorCat } = action.payload;
      return {
        ...state,
        loading: false,
        errorCat,
      };
    case GET_CATEGORIES_SUCCESS:
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        loading: false,
        error: null,
      };

    case GET_HIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_HIT_FAILURE:
      const { errorHit } = action.payload;
      return {
        ...state,
        loading: false,
        errorHit,
      };
    case GET_HIT_SUCCESS:
      const { hits } = action.payload;
      return {
        ...state,
        hits,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

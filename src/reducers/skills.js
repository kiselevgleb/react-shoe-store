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
  GET_ADDITEMS_REQUEST,
  GET_ADDITEMS_FAILURE,
  GET_ADDITEMS_SUCCESS,
  SEARCH_ITEMS_REQUEST,
  SEARCH_ITEMS_FAILURE,
  SEARCH_ITEMS_SUCCESS,
  GET_ORDERINFO_REQUEST,
  GET_ORDERINFO_FAILURE,
  GET_ORDERINFO_SUCCESS,
  POST_CART_REQUEST,
  POST_CART_FAILURE,
  POST_CART_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  categories: [],
  hits: [],
  loading: false,
  error: null,
  search: '',
  orderInfo: {},
  cart:[],
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {

    case POST_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_CART_FAILURE:
      const {errorCart} = action.payload;
      return {
        ...state,
        loading: false,
        error:errorCart,
      };
    case POST_CART_SUCCESS:
      const {cart} = action.payload;
      return {
        ...state,
        cart: cart,
        loading: false,
        error: null,
      };


    case GET_ORDERINFO_REQUEST:
      const { idInfo } = action.payload;
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ORDERINFO_FAILURE:
      const { errorInfo } = action.payload;
      return {
        ...state,
        loading: false,
        error:errorInfo,
      };
    case GET_ORDERINFO_SUCCESS:
      const { orderInfo } = action.payload;
      return {
        ...state,
        orderInfo,
        loading: false,
        error: null,
      };

    case SEARCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_ITEMS_FAILURE:
      const {errorSearch} = action.payload;
      return {
        ...state,
        loading: false,
        error:errorSearch,
      };
    case SEARCH_ITEMS_SUCCESS:
      const {itemsSearch} = action.payload;
      return {
        ...state,
        items:itemsSearch,
        loading: false,
        error: null,
      };
    case CHANGE_SEARCH_FIELD:
      const {searchChange} = action.payload;
      const hasQuery = searchChange.trim() == '';
      if(hasQuery){
      return {
        ...state,
        search:searchChange
      };}
      else{
        return {
          ...state,
          search:searchChange
        };
      };

    case GET_ADDITEMS_REQUEST:
      const { coin, cat } = action.payload;
      
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ADDITEMS_FAILURE:
      const { errorAddItems } = action.payload;
      return {
        ...state,
        loading: false,
        error:errorAddItems,
      };
    case GET_ADDITEMS_SUCCESS:
      const { additems } = action.payload;
      return {
        ...state,
        items: additems,
        loading: false,
        error: null,
      };

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
        error:errorItemsCat,
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
        error:errorCat,
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
        error:errorHit,
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
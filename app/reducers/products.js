import {immutableUpdate, immutableDelete} from '../utils/utils';

import {
	FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
	CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE, RESET_NEW_PRODUCT,
	VALIDATE_PRODUCT_FIELDS,VALIDATE_PRODUCT_FIELDS_SUCCESS, VALIDATE_PRODUCT_FIELDS_FAILURE, RESET_PRODUCT_FIELDS,
	UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
	SELECT_PRODUCT, DELETE_PRODUCT,	DELETE_PRODUCT_SUCCESS,	DELETE_PRODUCT_FAILURE,	RESET_DELETED_PRODUCT 
	
} from '../actions/products';



const INITIAL_STATE = {
	productsList: {products: [], error:null, loading: false},
	fieldProducts: {suggestions: [], error:null, loading: false}, // Used to feed the option list when creating a new product in form.
	selectedProduct: {}
};

					
export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	  
  
  //READ_ALL
  case FETCH_PRODUCTS_BEGIN:
    return { ...state, productsList:{products:[], error: null, loading: true} }; 

  case FETCH_PRODUCTS_SUCCESS:
    return { ...state, productsList:{ products:action.payload.products.data, error: null, loading: false} }; 

case FETCH_PRODUCTS_FAILURE:
  return { ...state, productsList:{ loading: false, error: action.payload.error, products: [] }};
  
  
  
  // Create a product in database
  case CREATE_PRODUCT:
  	return {...state, newProduct: {...state.newProduct, loading: true}}
  case CREATE_PRODUCT_SUCCESS:
	let products = state.productsList.products.slice();
	products.splice(action.index, 0, action.payload);
  	return {...state, productsList: {products:products, error:null, loading: false}}
  case CREATE_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, newProduct: {product:null, error:error, loading: false}}
  case RESET_NEW_PRODUCT:
	return {...state, newProduct:{product:null, error:null, loading: false}}
  
  
  // Form to add a product
  case VALIDATE_PRODUCT_FIELDS:
    ///return {...state, fieldProducts: state.fieldProducts}
    return {...state, fieldProducts: {suggestions: [], error:null, loading: true}}
  case VALIDATE_PRODUCT_FIELDS_SUCCESS:
    return {...state, fieldProducts: {suggestions: action.payload.products, error:null, loading: false}}
  case VALIDATE_PRODUCT_FIELDS_FAILURE:
    let message = action.payload.data.message;
    if(!message) {
      error = {message: "Un problème est survenu"};
    } else {
      error = {message: message};
    }
    return {...state, fieldProducts:{...state.fieldProducts, error: error, loading: false}}
  ///case RESET_PRODUCT_FIELDS:
	///return {...state, fieldProducts:{...state.fieldProducts, error: null, loading: null}}
	
	
	
	// Update a product in database
  case UPDATE_PRODUCT:
  	return {...state, productsList: {...state.productsList, error: null, loading: true}}
  case UPDATE_PRODUCT_SUCCESS:
	let updatedItem = action.payload.data;
	let updatedList= immutableUpdate(state.productsList.products, updatedItem, "_id");
  	return {...state, productsList: {products:updatedList, error:null, loading: false}}
  case UPDATE_PRODUCT_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, productsList: {...state.productsList, error:error, loading: false}}
 
	//Select and delete
  case SELECT_PRODUCT:
  	return {...state, selectedProduct: action.payload}
	
  case DELETE_PRODUCT:
	return {...state, productsList: {...state.productsList, error: null, loading: true}}
  case DELETE_PRODUCT_SUCCESS:
	let deletedItem = action.payload.data.product;
	let deletedList = immutableDelete(state.productsList.products, "_id", deletedItem);
   return {...state, productsList: {products:deletedList, error:null, loading: false}}
  case DELETE_PRODUCT_FAILURE:
	error = action.payload || {message: action.payload.message};
  case RESET_DELETED_PRODUCT:
	return {}

	
  default:
    return state;
  }
}
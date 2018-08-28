import {immutableAdd, immutableSwap} from '../utils/utils';

import {
	FETCH_PRODUCTS_POSITIONS_SUCCESS, ADD_PRODUCT_SUCCESS, SELECTED_DRAGGED_PRODUCT, UPDATE_POSITION
	
} from '../actions/marketDrag';


const INITIAL_STATE = {
	productsSelection: [],
	draggedProduct: {}
};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
	 
	case FETCH_PRODUCTS_POSITIONS_SUCCESS:
		return state; 	 
  

	case SELECTED_DRAGGED_PRODUCT:
		return { ...state, draggedProduct: action.payload};
	
	case UPDATE_POSITION:
		let {item : oldItem, isFromShelf} = state.draggedProduct;
		let newItem = {...action.payload, product: oldItem.product};
		
		let newProductsSelection = isFromShelf ?
			immutableAdd(state.productsSelection, newItem):
			immutableSwap(state.productsSelection, oldItem, newItem, "X", "Y"); 
		return { ...state, productsSelection: newProductsSelection}; 
	
  default:
    return state;
  }
}
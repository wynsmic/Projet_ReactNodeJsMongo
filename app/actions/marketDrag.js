export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const SELECTED_DRAGGED_PRODUCT = 'SELECTED_DRAGGED_PRODUCT';
export const UPDATE_POSITION = 'UPDATE_POSITION';



export function selectedProduct (item, isFromShelf) {
	return {
		type: SELECTED_DRAGGED_PRODUCT,
		payload: {item, isFromShelf}
	};
}

export function updatePosition (x,y) {
  const newPosition = {X: x, Y:y};
  return {
		type: UPDATE_POSITION,
		payload: newPosition
  };
}
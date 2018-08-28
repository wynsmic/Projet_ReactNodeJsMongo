import { connect } from 'react-redux';
import MarketShelft from '../components/MarketDrag/MarketShelft.js';
import {	updatePosition, selectedProduct} from '../actions/marketDrag';
import { fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure } from '../actions/products';

function mapStateToProps(state) {
	return {
	  productsList: state.products.productsList,
	  productsSelection: state.marketDrag.productsSelection
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => {
			dispatch(fetchProductsBegin()).then((response) => {
				!response.error ? dispatch(fetchProductsSuccess(response.payload)) : dispatch(fetchProductsFailure(response.payload));
			});
		},
		
		selectedProduct: (item, isFromShelf) => {
			dispatch(selectedProduct(item, isFromShelf));
		},
		
		updatePosition: (x,y) => {
			dispatch(updatePosition(x,y));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketShelft);
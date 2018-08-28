import { connect } from 'react-redux';
import { fetchUserProductsBegin, fetchProductsSuccess, fetchProductsFailure ,
		updateProduct, updateProductSuccess, updateProductFailure,
		selectProduct, deleteProduct, deleteProductSuccess, deleteProductFailure} from '../actions/products';
import ProductsList from '../components/Products/ProductsList';

import {getIdArray} from '../utils/utils';


   
function mapStateToProps(state) {
	return {
	  productsList: state.products.productsList,
	  selected: state.products.selectedProduct,
	  token: state.auth.token
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchUserProductsBegin()).then((response) => {
            !response.error ? dispatch(fetchProductsSuccess(response.payload)) : dispatch(fetchProductsFailure(response.payload));
          });
    },
	
	onSelectRow: (row, isSelect, rowIndex, e) => {
		dispatch(selectProduct(row));
	},
	
	deleteProduct: (selectedProduct) => { 
		dispatch(deleteProduct(selectedProduct)).then((response) => {
			!response.error ? dispatch(deleteProductSuccess(response.payload)) : dispatch(deleteProductFailure(response.payload));
		});
	},
	
	// In charge of updating the react-table and batabase after editing cell
	// - row contains the full set column-values of the clicked row
	onAfterSaveCell:(oldValue, newValue, row, column) => { 
		dispatch(updateProduct(row)).then((response) => {
			!response.error ? dispatch(updateProductSuccess(response.payload)) : dispatch(updateProductFailure(response.payload));
		});
	},
	
	// Invert the product's booleans states. Not using the basic cell editing callback as acting on sub-components and not cell's values
	// - datafield is colum's name
	// - row contains the full set column-values of the clicked row
	invertChecked:(row, datafield)=>{
		row[datafield] = !row[datafield]; //invert
		dispatch(updateProduct(row)).then((response) => {
			!response.error ? dispatch(updateProductSuccess(response.payload)) : dispatch(updateProductFailure(response.payload));
		});
	}
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
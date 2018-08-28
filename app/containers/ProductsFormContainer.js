import ProductForm from '../components/Products/ProductForm.js';
import { resetNewProduct } from '../actions/products';
import { connect } from 'react-redux';
import { createProduct, createProductSuccess, createProductFailure,
	validateProductFields, validateProductFieldsSuccess, validateProductFieldsFailure } from '../actions/products';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetMe: () => {
      dispatch(resetNewProduct());
    },
	
	
	//For any field errors upon submission (i.e. not instant check)
	handleSubmit: (e) => {
		event.preventDefault();
		debugger;
		let  id_inputs = ['name', 'price', 'quantity'];
		let  id_checkbox = ['organicFlag', 'labelRougeFlag', 'permacultreFlag', 'sustainableFlag', 'fullSunFlag', 'frozenFlag'];
		let  product={};
		for (var item of e.target) { if (id_inputs.includes(item.id)) product[item.id] = item.value};
		for (var item of e.target) { if (id_checkbox.includes(item.id)) product[item.id] =  item.checked ? true : false};
		return dispatch(createProduct(product, ownProps.token))
			.then(result => {
			  if (result.payload.response && result.payload.response.status !== 200) {
				dispatch(createProductFailure(result.payload.response.data));
				throw new SubmissionError(result.payload.response.data);
			  }
			  dispatch(createProductSuccess(result.payload.data.products));
			});
	},
	
	// Fetch product names for autofill
	handleNameChange: (e) => {
	  return dispatch(validateProductFields(e.target.value))
		.then((response) => {
			(response.payload && response.payload.status === 200)? 
			dispatch(validateProductFieldsSuccess(response.payload.data.products)) : dispatch(validateProductFieldsFailure(response.payload)) ;
		});
	}

  }
}


function mapStateToProps(state, ownProps) {
  return {
    fieldProducts: state.products.fieldProducts	
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
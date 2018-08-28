import axios from 'axios';
	
//Fetch products
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

//Fetch products for the user
export const FETCH_USER_PRODUCTS_BEGIN   = 'FETCH_USER_PRODUCTS_BEGIN';
export const FETCH_USER_PRODUCTS_SUCCESS = 'FETCH_USER_PRODUCTS_SUCCESS';
export const FETCH_USER_PRODUCTS_FAILURE = 'FETCH_USER_PRODUCTS_FAILURE';

//Create new product
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
export const RESET_NEW_PRODUCT = 'RESET_NEW_PRODUCT';

//Validate product fields like Title, Categries on the server
export const VALIDATE_PRODUCT_FIELDS = 'VALIDATE_PRODUCT_FIELDS';
export const VALIDATE_PRODUCT_FIELDS_SUCCESS = 'VALIDATE_PRODUCT_FIELDS_SUCCESS';
export const VALIDATE_PRODUCT_FIELDS_FAILURE = 'VALIDATE_PRODUCT_FIELDS_FAILURE';
export const RESET_PRODUCT_FIELDS = 'RESET_PRODUCT_FIELDS';

//Create new product
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

//Select product
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

//Delete product
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const RESET_DELETED_PRODUCT = 'RESET_DELETED_PRODUCT';


//-----------------

const ROOT_URL = 'http://localhost:3000/api';

//Fetch products
export function fetchProductsBegin () {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/fetchProducts`,
    headers: []
  });

  return {
    type: FETCH_PRODUCTS_BEGIN,
    payload: request
  };
}


export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

// Fetch products for the user
// Reuse the same further steps as fetchProductsBegin
export function fetchUserProductsBegin () {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/fetchUserProducts`,
    headers: []
  });

  return {
    type: FETCH_PRODUCTS_BEGIN,
    payload: request
  };
}



// Create
export function createProduct(values, token) {
  const request = axios({
    method: 'post',
    data: values,
    url: `${ROOT_URL}/createProduct`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return {
    type: CREATE_PRODUCT,
    payload: request
  };
}

export function createProductSuccess(newProduct) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: newProduct
  };
}

export function createProductFailure(error) {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error
  };
}

export function resetNewProduct() {
  return {
    type: RESET_NEW_PRODUCT
  };
}


// Form
export function validateProductFields(value) {
	const request = axios({
    method: 'post',
    data: {name: value},
    url: `${ROOT_URL}/validate/productfields`
  });
  return {
    type: VALIDATE_PRODUCT_FIELDS,
    payload: request
  };
}

export const validateProductFieldsSuccess = products => ({

    type: VALIDATE_PRODUCT_FIELDS_SUCCESS,
	 payload: { products }
});


export const validateProductFieldsFailure= error => ({

    type: VALIDATE_PRODUCT_FIELDS_FAILURE,
    payload: error
});


export function resetProductFields() {
  return {
    type: RESET_PRODUCT_FIELDS
  };
}



// Update to be changed
export function updateProduct(updatedItem) {
  const request = axios({
    method: 'post',
    data: updatedItem,
    url: `${ROOT_URL}/updateProduct`
    
  });
  return {
    type: UPDATE_PRODUCT,
    payload: request
  };
}

export function updateProductSuccess(updatedProduct) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: updatedProduct
  };
}

export function updateProductFailure(error) {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: error
  };
}

// Select and delete
export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    payload: product
  };
}


export function deleteProduct(product) {
	const request = axios({
    method: 'get',
    url: `${ROOT_URL}/deleteProduct/${product._id}`
    
  });
  return {
    type: DELETE_PRODUCT,
    payload: request
  };
}

export function deleteProductSuccess(product) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: product
  };
}
export function deleteProductFailure(error) {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error
  };
}
export function resetDeleteProduct(product) {
  return {
    type: RESET_DELETED_PRODUCT,
    payload: product
  };
}




 
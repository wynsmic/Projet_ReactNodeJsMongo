import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import products from './products';
import marketDrag from './marketDrag';
import { reducer as form } from 'redux-form';

export default combineReducers({
  messages,
  auth,
  products,
  form,
  marketDrag
});


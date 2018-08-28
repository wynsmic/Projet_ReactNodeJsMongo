import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart.js';
import {	} from '../actions/cart';


function mapStateToProps(state) {
	return {
	  productsSelection: state.marketDrag.productsSelection
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
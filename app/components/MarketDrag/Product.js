import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Types';
import { DragSource } from 'react-dnd';

import { Image } from 'react-bootstrap';

const productSource = {
  beginDrag(props) {
	  let { X, Y, product, isFromShelf, selectedProduct } = props;
	  let item = (X == "undefined" || Y == "undefined" ) ? { X:{}, Y:{}, product}:{ X, Y, product};
	  selectedProduct(item, isFromShelf);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Product extends Component {
  render() {
    const { connectDragSource, isDragging, Y } = this.props;
	
	// Y ranges fro 1 (back) to 8 (front). let's consider a min size of 50 px.
	const height = Y+1 ? 50 + 8*Y : 100;
    return connectDragSource(
    <div style={{
       opacity: isDragging ? 0.5 : 1,
       fontSize: 25,
       fontWeight: 'bold',
       cursor: 'move'
     }}>

			<Image style={{
			   height: height + 'px'
			 }} src='..\..\..\img\default.png' rounded />
    </div>
    );
  }
}

Product.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PRODUCT, productSource, collect)(Product);
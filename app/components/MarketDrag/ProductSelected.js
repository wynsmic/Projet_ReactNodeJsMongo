import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Types';
import { DragSource } from 'react-dnd';

const productSource = {
  beginDrag(props) {
	  let { item, isFromShelf, selectedProduct } = props;
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
    const { connectDragSource, isDragging, product } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    );
  }
}

Product.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PRODUCT_SELECTED, productSource, collect)(Product);
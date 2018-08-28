import React, { Component } from 'react';
import PropTypes from 'prop-types';



import BoardSquare from './BoardSquare';
import Product from './Product';


// Layout: Board > [BoardSquare(productsSelection)] > Square (props.children)
class Board extends Component {
	
	 static propTypes () {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const productsSelection = this.props.productsSelection;
	const piece = productsSelection.map( (item, i) => (x === item.X && y === item.Y) ?
		<Product key={i}  X={item.X} Y={item.Y} product={item.product}  isFromShelf={false} selectedProduct={this.props.selectedProduct}/> 
		:      null );
	
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
		<BoardSquare x={x} y={y} updatePosition={this.props.updatePosition}>
			{piece}
        </BoardSquare> 
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
		
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

export default Board;
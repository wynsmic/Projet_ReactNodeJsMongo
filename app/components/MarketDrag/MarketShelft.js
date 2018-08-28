import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CartContainer from '../../containers/CartContainer';


import Board from './Board';
import Shelft from './Shelft';

import { Grid, Row ,Col, Image } from 'react-bootstrap';

class MarketShelft extends Component {
	
	constructor(props) {
		super(props);	
		this.handleClick = this.handleClick.bind(this);
	}
	
	
	handleClick(e){
		console.log('clicked.');
	}

	render(){
		return(
		// pour du responsive, penser attributs xs={6} md={4}...
			<div id="market"  >
				
				<Grid bsClass="market">
					
					<Row className="show-grid" bsClass="shelft">
						<Col xsHidden md={1} lg={2} style = {{  alignSelf: 'center'}}>
						  left
						</Col>
						<Col xs={7} md={7} lg={8}  style = {{  height: '100%'}}>
							<Row className="show-grid" bsClass="shelft_top">
								<div>Top area</div>
							</Row>
							<Row className="show-grid" bsClass="shelft_center">
								<Shelft 
								fetchProducts={this.props.fetchProducts}
								productsList={this.props.productsList}
								selectedProduct={this.props.selectedProduct}
								/>
							</Row>

							<Row className="show-grid" bsClass="shelft_bot">
								<div>The middle content</div>
							</Row>
						</Col>
						<Col xsHidden md={2} md={2} lg={1} bsClass="shelft_r">
						  <CartContainer/>
						</Col>
					</Row>
					
	
					
					<Row className="show-grid" bsClass="board">
						<Image  src='..\..\..\img\site\board1.jpg' id='boardBackground'/>
						<Board
						productsSelection={this.props.productsSelection}
						updatePosition={this.props.updatePosition}
						selectedProduct={this.props.selectedProduct}
						/>
					</Row>

					<Row className="show-grid" bsClass="market_bot">
						<div>The middle content</div>
					</Row>
				</Grid>
					

				
			</div>
		)  
	}
}

export default DragDropContext(HTML5Backend)(MarketShelft);
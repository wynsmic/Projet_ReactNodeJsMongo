import React, { Component } from 'react';

import { Column, Row } from 'simple-flexbox';
import { Panel, Image,  Button } from 'react-bootstrap';
import RoundedButton from '../Styled/RoundedButton';


import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';


class Cart extends React.Component {
	
	constructor(props) {
		super(props);
		this.deleteSelected = this.deleteSelected.bind(this);
	}
		

	
	// to do
	deleteSelected(){

	}

	
	 
	render(){
		/*const { products, error, loading  } = this.props.productsList;
		if (loading) {
		  return <div>Loading...</div>;
		}
		if (error) {
		  return <div>Loading error...</div>;
		}*/
		
		const columns = [
			{dataField: '_id',  text: 'ID', hidden: true},
			{dataField: 'name',  text: 'Produit'},
			{dataField: 'quantity',  text: 'Quantité'},
			{dataField: 'price',  text: 'Prix'},
			{datafield: 'discount',  text: 'Discount'}
		 ];
		 
		var products = this.props.productsSelection.map(function(item){return item.product;});
  

		
		return (
			<div>
	
				
				
					<BootstrapTable 
						 //pagination={ paginationFactory()}
						keyField='_id' 
						data={  products }
						columns={ columns }
						selectRow={ 
									{
										mode: 'radio',
										//selected:this.props.selected._id,
										clickToSelect: true,
										classes: 'selection-row',
										style: { backgroundColor: '#c8e6c9' },
										onSelect: this.props.onSelectRow
									} }
					/>
				<button type="button" class="btn btn-info" onClick={this.deleteSelected}>Supprimer</button>
				
			 </div>
		);
	}
}



export default Cart;
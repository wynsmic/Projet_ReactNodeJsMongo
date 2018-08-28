import React, { Component } from 'react';

import { Column, Row } from 'simple-flexbox';
import { Panel, Image,  Button } from 'react-bootstrap';
import RoundedButton from '../Styled/RoundedButton';


import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import ProductsFormContainer from '../../containers/ProductsFormContainer';
import CollapsePanel from './CollapsePanel';




class ProductsList extends React.Component {
	
	constructor(props) {
		super(props);
		this.deleteSelected = this.deleteSelected.bind(this);
	}
		
	componentDidMount() {
		this.props.fetchProducts();
	}
	
	deleteSelected(){
		this.props.deleteProduct(this.props.selected);
	}

	// Define the button's format depending on button's id (i.e. datafield)
	checkedFormatter(cell, row, rowIndex) {
		const datafield = this.datafield;
		const  invertChecked = this.invertChecked;
		function triggerOnEvent(){
			invertChecked(row, datafield);
		}
		
		if (row[this.datafield] & this.datafield != "frozenFlag"){
			return (
				<RoundedButton className="success" onClick={triggerOnEvent}><i className='glyphicon glyphicon-leaf'/></RoundedButton>
			);
		} else if (row[this.datafield] & this.datafield==="frozenFlag"){
			return (
				<RoundedButton className="frozen" onClick={triggerOnEvent}><i className='glyphicon glyphicon-asterisk'/></RoundedButton>
			);
		} else {
			return (
				<RoundedButton className="disabled" onClick={triggerOnEvent}><i className='glyphicon glyphicon-remove'/></RoundedButton>
			);
		}
	}

	 
	render(){
		const { products, error, loading  } = this.props.productsList;
		if (loading) {
		  return <div>Loading...</div>;
		}
		if (error) {
		  return <div>Loading error...</div>;
		}
		
		const columns = [
			{dataField: '_id',  text: 'ID', hidden: true},
			{dataField: 'name',  text: 'Produit'},
			{dataField: 'quantity',  text: 'Quantité'},
			{dataField: 'price',  text: 'Prix'},
			{datafield: 'discount',  text: 'Discount'},
			{datafield: 'organicFlag',  text: 'Bio', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false},
			{datafield: 'labelRougeFlag',  text: 'Label rouge', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false},
			{datafield: 'permacultreFlag',  text: 'Permaculture', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false},
			{datafield: 'sustainableFlag',  text: 'Agri raisonnée', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false},
			{datafield: 'fullSunFlag',  text: 'Plein sol', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false},
			{datafield: 'frozenFlag',  text: 'Surgelé', invertChecked:this.props.invertChecked, formatter: this.checkedFormatter, editable: false}
		 ];
		 
		
  

		
		return (
			<div>
				<CollapsePanel>
					<Row vertical='center'>
						<Column flexGrow={1} horizontal='center'>
							<ProductsFormContainer 	token={this.props.token}/>
						</Column>
						<Column flexGrow={1} horizontal='center'>
							<Panel bsStyle="success">
								<Image 
								  src='..\..\..\img\products\default.png'
								/>
							</Panel>
						</Column>
					</Row>	
				</CollapsePanel>
				
				<button type="button" class="btn btn-info" onClick={this.deleteSelected}>Supprimer</button>
				
					<BootstrapTable 
						 //pagination={ paginationFactory()}
						keyField='_id' 
						data={  this.props.productsList.products }
						columns={ columns }
						cellEdit =  {cellEditFactory({mode: "click", blurToSave: true, afterSaveCell: this.props.onAfterSaveCell })}
						selectRow={ 
									{
										mode: 'radio',
										selected:this.props.selected._id,
										clickToSelect: true,
										clickToEdit: true ,
										classes: 'selection-row',
										style: { backgroundColor: '#c8e6c9' },
										onSelect: this.props.onSelectRow
									} }
					/>
				
				
			 </div>
		);
	}
}



export default ProductsList;
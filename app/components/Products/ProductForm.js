
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Form, FormGroup, ControlLabel, FormControl, 
	Checkbox, InputGroup, Col, Button, Glyphicon ,
		DropdownButton, MenuItem, HelpBlock, Radio  } from 'react-bootstrap';


////////////// to uninstall
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Input from 'react-input-datalist';




class ProductsForm extends Component {
	
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
		  price: '',
		  quantity: ''
		};
	}
	
	handleChange(e) {
		if (e.target.id === "price") this.setState({ price: e.target.value });
		else if (e.target.id === "quantity") this.setState({ quantity: e.target.value });
	}
	

	renderError(fieldProducts) {
		if (fieldProducts && fieldProducts.error && fieldProducts.error.message) {
		  return (
			<div className="alert alert-danger">
			  { fieldProducts ? fieldProducts.error.message : '' }
			</div>
			);
		} else {
		  return <span></span>
		}
	}
	
		renderSubmit(options) {
		if (!options) {
			// Problem in the code..
			return ( 	<Button  bsStyle="danger">Oups, indisponible!</Button> 	);
		}
		else if (options && options.error && options.error.message) {
			// Problem fetching results or no results
			return ( 	<Button  bsStyle="warning">Produit introuvable</Button> 	);
		} else if ( options.length ===0 || !options[0].name || !this.state.price || !this.state.quantity){
			// Missing fields
			return ( 	<Button  bsStyle="warning">Champ manquant</Button> 	);
		} else {
			// OK
			return (<Button type="submit" bsStyle="success">Ajouter au stock</Button> );
		}
	}

  
  
  render() {
    const {handleSubmit, submitting, fieldProducts, token, handleNameChange} = this.props;
	
	// List of suggested names from database:
	const options = fieldProducts.suggestions;
	const renderFields = (options && options.length > 0) ? options.map( (item, i) => <option key={i} value={item.name}/>) : null;
	
	// Category whose 1st option of the list belongs to :
	const cat_name = (options && options[0] && options[0].category_2 && options[0].category_2.name) ? options[0].category_2.name : null;
	const cat_unit = (options && options[0] && options[0].category_2 && options[0].category_2.name) ? options[0].category_2.unit : null;
	// <FormControl.Feedback /> peut etre utile apres check de valeurs
    return (
      <div className='container'>
        { this.renderError(fieldProducts) }
			
		<Form onSubmit={handleSubmit}>
		
			<FormGroup controlId="name" >
				<ControlLabel>Produit</ControlLabel>
				<FormControl
					type="text"
					list="products"
					placeholder="Nom"
					onChange={handleNameChange}
				/>
				<HelpBlock>Touvé dans la catégorie : {cat_name}</HelpBlock>
				<datalist id="products">
					{renderFields} // loading state pourrait être implémenté...
				</datalist>
			</FormGroup>
			
			<FormGroup controlId="category_2" >
				<FormControl
					type="hidden"
					value={cat_name}
				/>
			</FormGroup>
			
			<FormGroup>
			  <Checkbox title="organicFlag" id="organicFlag">Bio</Checkbox>
			  <Checkbox title="labelRougeFlag" id="labelRougeFlag">Label rouge</Checkbox>
			  <Checkbox title="permacultreFlag" id="permacultreFlag">Issue de la permaculture</Checkbox>
			  <Checkbox title="sustainableFlag" id="sustainableFlag">Issu de l'agriculture raisonnée</Checkbox>
			  <Checkbox title="fullSunFlag" id="fullSunFlag">Plein sol</Checkbox>
			  <Checkbox title="frozenFlag" id="frozenFlag">Surgelé</Checkbox>
			</FormGroup>
			
			<FormGroup controlId="price" >
				<ControlLabel>Prix global</ControlLabel>
				<InputGroup>
					<FormControl
						type="number"
						placeholder="00.00"
						onChange={this.handleChange}
					/>
					<InputGroup.Addon>€/{cat_unit}</InputGroup.Addon>
				</InputGroup>
			</FormGroup>
			
			<FormGroup controlId="quantity" >
				<ControlLabel>Quantité disponible</ControlLabel>
					<InputGroup>
						<FormControl
							type="number"
							placeholder="0"
							onChange={this.handleChange}
						/>
						<DropdownButton
							componentClass={InputGroup.Button}
							id="sellUnit"
							title="Vendu par"
						>
							<MenuItem key="1">{cat_unit}</MenuItem>
							<MenuItem key="2">Lots</MenuItem>
							<MenuItem key="3">Unité</MenuItem>
						</DropdownButton>
					</InputGroup>
			</FormGroup>
			
			<FormGroup>
				<ControlLabel>Quantité disponible</ControlLabel>
				<Radio name="soldBy"> "A l'unité"	</Radio>{'test'}
				<Radio name="soldBy"> 2 </Radio>{' '}
				<Radio name="soldBy"> 3 </Radio>
			</FormGroup>
			
			<FormGroup>
				<Col smOffset={2} sm={10}>
				  {this.renderSubmit(options)}
				</Col>
			</FormGroup>
			
		</Form>
      </div>
    )
  }
}


export default ProductsForm;
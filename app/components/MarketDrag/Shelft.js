import React, { Component } from 'react';
import Slider from 'react-slick-carousel';

import Product from './Product';
 
//const maListe = Array.apply(null, {length: 2}).map(Number.call, Number)




class ProductData extends React.Component {
  render() {
    return (
		<div>
			{this.props.children}
			<div>{this.props.product.name}</div>
		</div>
		
	);
  }
}



 
class Shelft  extends React.Component {
	
	componentDidMount() {
		this.props.fetchProducts();
	}
	
  render() {
	const { products, error, loading  } = this.props.productsList;
    var settings = {
		slidesToShow: 10,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
    };
	
	
	if (loading || products.length ===0) {
	  return <div>Loading...</div>;
	}
	if (error) {
	  return <div>Loading error...</div>;
	}

    return (
      <Slider {...settings}>
			{products.map( (product, i) =>  
				<div  key={i} >
					<ProductData product={product}>
						<Product product={product}  isFromShelf={true} selectedProduct={this.props.selectedProduct}/>
					</ProductData>
				</div>) 
			}
      </Slider>
    );
  }
}

export default Shelft;
var Products = require('../models/Products');
var product = new Products();

var RawProducts = require('../models/RawProducts');
var rawProducts = new RawProducts.model();

var Category_2 = require('../models/Category_2');
var category_2 = new Category_2();
// All info at
// https://coursework.vschool.io/mongoose-crud/



/** READ
 * GET /fetchProducts
 * Get all products.
 */
exports.fetchProducts = function(req, res, next) {
	
  Products.find({},(err,docs)=>{
    res.status(200).json(docs)
})
};

/** READ
 * GET /fetchUserProducts
 * Get all products.
 */
exports.fetchUserProducts = function(req, res, next) {
	
  Products.find({user_id: req.user.id},(err,docs)=>{
    res.status(200).json(docs)
})
};





exports.createProduct = function(req, res, next) {
	var body = req.body;
	var name = body.name;
	var price = body.price;
	var quantity = body.quantity;
	
	
	//simulate error if title, categories and content are all "test"
	//This is demo field-validation error upon submission. 
	if (name === 'test' && price === 'test' && quantity === 'test') {
	return res.status(403).json({
		message: {
		name: 'Name Error - Cant use "test" in all fields!',
		price: 'price Error',
		submitmessage: 'Final Error near the submit button!'
		}
	});
	}
	
	if (!name || !price || !quantity) {
		return res.status(400).json({
			message: 'Error, all fields required!'
		});
	}
	var product = body;
	product['user_id']=req.user.id;
	var product_db = new Products(product);
    product_db.save(function(err, product_db) {
		if (err) {
		  console.log(err);
		  return res.status(500).json({
			message: 'Could not save product'
		});
  	}
    res.json(product);
  });
}



/** UPDATE
 * POST /updateProduct
 * Update a product.
 */
 exports.updateProduct = function(req, res, next) {

	Products.findByIdAndUpdate(  
    // the id of the item to find
    req.body._id,
	
    // the change to be made. Mongoose will smartly combine your existing 
    // document with this change, which allows for partial updates too
	//{ _id: '5af164746f604a4074ab29ad',   name: 'qzd',  price: 15 },
    req.body,

    // an option that asks mongoose to return the updated version 
    // of the document instead of the pre-updated one.
    {new: true},

    // the callback function
    (err, product) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(product);
    });
 }
 
 
/** DELETE
 * GET /deleteProduct
 * Delete a product.
 */
  exports.deleteProduct = function(req, res, next) {

	Products.findByIdAndRemove( {'_id': req.params._id} , (err, product) => {  
		// As always, handle any potential errors:
		if (err) return res.status(500).send(err);
		const response = {
			message: "Product successfully deleted",
			product: product
		};
		return res.status(200).send(response);
	});
  }
  
  
  /** 
 * POST /Look for product in the database for form suggestions
 */
exports.validateProductFields = function(req, res, next) {
	var body = req.body;
	var name = body.name ? body.name.trim() : '';
	if (!name) {  
			return res.status(402).json({ message: "Merci de renseigner un produit."	});
	}
	
	 var argRegEx = new RegExp('^' + name , 'i');
	RawProducts.model.find({ name: argRegEx}, 'name category_2',  function(err, products) {
		if (err) {
		  console.log(err);
		  return res.status(500).json({
			message: 'Service temporairement indisponible, impossible de poursuivre.'
		  });
		};
		if (products.length===0) {  
			return res.status(403).json({ message: "Le produit recherché n'est pas trouvé."	});
		}
		else {
			const response = {
				message: "Product successfully found",
				products: products
			};
			return res.status(200).send(response);
		} ;


	}).populate('category_2').limit( 10 ).sort( { name: 1 } );
}

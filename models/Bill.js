var mongoose = require('mongoose');


var billSchema = mongoose.Schema	(
	{
		created_at: { type: Date, default: Date.now }
		buyer: { type: Schema.Types.ObjectId, ref: 'User' },
		listProducts: [{ type: Schema.Types.ObjectId, ref: 'products' }]
	}
);

var Bill = mongoose.model('bill', billSchema);

	
module.exports = Bill;
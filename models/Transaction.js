var mongoose = require('mongoose');


var transactionSchema = mongoose.Schema	(
	{
		bill_id: { type: Schema.Types.ObjectId, ref: 'bill' },
		product: { type: Schema.Types.ObjectId, ref: 'products' },
		quantity: Number,
		totalPrice: Number
	}
);

var Transaction = mongoose.model('transaction', transactionSchema);

	
module.exports = Transaction;
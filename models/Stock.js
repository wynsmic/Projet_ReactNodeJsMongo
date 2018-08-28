var mongoose = require('mongoose');


var stockSchema = mongoose.Schema	(
	{
		producer: { type: Schema.Types.ObjectId, ref: 'producer' },
		product: { type: Schema.Types.ObjectId, ref: 'products' },
		quantity: Number,
		dateMaj: Date,
		lifeSpan: Number
	}
);

var Stock = mongoose.model('stock', productSchema);

	
module.exports = Stock;
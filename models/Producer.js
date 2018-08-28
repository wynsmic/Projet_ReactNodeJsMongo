var mongoose = require('mongoose');


var producerSchema = mongoose.Schema	(
	{
	firstName: String,
	lastName: String,
	address: String,
	postCode: Number,
	City: String,
	phoneNumber: Number,
	mainPicture: String
	}
);

var Producer = mongoose.model('producer', producerSchema);


module.exports = Producer;
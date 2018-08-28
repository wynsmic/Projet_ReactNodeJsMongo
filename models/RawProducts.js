var mongoose = require('mongoose');



//mongoimport --db Amikahuete --collection rawproducts --type=csv --headerline --file C:\Users\michael\Desktop\BoF\nutrition.csv 
var schema = mongoose.Schema(
	{
		name: String,
		category_1: String,
		category_2: { type: mongoose.Schema.Types.ObjectId, ref: 'category_2' },
		category_3: String,
		code: String,
		energyValue: String,
		water: String,
		proteins: String,
		carbihydrate: String,
		fat: String,
		sugar: String,
		starch: String,
		fiber: String,
		alcohol: String,
		organicAcid: String,
		saturatedFatty: String,
		monounsaturated: String,
		polyunsaturated: String,
		cholesterol: String,
		salt: String,
		calcium : String,
		copper: String,
		iron: String,
		iodine: String,
		magnesium: String,
		manganese : String,
		phosphorus: String,
		potassium : String,
		selenium : String,
		zinc: String,
		betaCarotene: String,
		vitamin_D: String,
		vitamin_E: String,
		vitamin_K1: String,
		vitamin_K2: String,
		vitamin_C: String,
		vitamin_B1: String,
		vitamin_B2: String,
		vitamin_B3: String,
		vitamin_B5: String,
		vitamin_B6: String,
		vitamin_B9: String,
		vitamin_B12: String
	}
);


exports.schema= schema;
exports.model = mongoose.model('rawproducts', schema);

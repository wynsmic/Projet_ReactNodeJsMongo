var mongoose = require('mongoose');
var RawProducts = require('../models/RawProducts');


var ingredientSchema = mongoose.Schema(
	{ 
		name: String,
		quantity: Number,
		allergen :Boolean
	}
);

var nutritionalLabels = 
	[
		{_id: "energyValue", label: "Energie, Règlement UE N° 1169/2011", unit: "kcal/100g"},
		{_id: "water", label: "Eau", unit: "g/100g"},
		{_id: "proteins", label: "Protéines", unit: "g/100g"},
		{_id: "carbihydrate", label: "Glucides", unit: "g/100g"}, 
		{_id: "fat", label: "Lipides", unit: "g/100g"},
		{_id: "sugar", label: "Sucres", unit: "g/100g"},
		{_id: "starch", label: "Amidon", unit: "g/100g"},
		{_id: "fiber", label: "Fibres alimentaires", unit: "g/100g"},
		{_id: "alcohol ", label: "Alcool", unit: "g/100g"},
		{_id: "organicAcid", label: "Acides organiques", unit: "g/100g"},
		{_id: "saturatedFatty", label: "AG saturés", unit: "g/100g"},
		{_id: "monounsaturated", label: "AG monoinsaturés", unit: "g/100g"},
		{_id: "polyunsaturated", label: "AG polyinsaturés", unit: "g/100g"},
		{_id: "cholesterol", label: "Cholestérol", unit: "mg/100g"},
		{_id: "salt", label: "Sel chlorure de sodium", unit: "g/100g"},
		{_id: "calcium ", label: "Calcium", unit: "mg/100g"},
		{_id: "copper", label: "Cuivre", unit: "mg/100g"},
		{_id: "iron", label: "Fer", unit: "mg/100g"},
		{_id: "iodine", label: "Iode", unit: "µg/100g"},
		{_id: "magnesium", label: "Magnésium", unit: "mg/100g"},
		{_id: "manganese ", label: "Manganèse", unit: "mg/100g"},
		{_id: "phosphorus", label: "Phosphore", unit: "mg/100g"},
		{_id: "potassium ", label: "Potassium", unit: "mg/100g"},
		{_id: "selenium ", label: "Sélénium", unit: "µg/100g"},
		{_id: "zinc", label: "Zinc", unit: "mg/100g"},
		{_id: "betaCarotene", label: "Beta-Carotène", unit: "µg/100g"},
		{_id: "vitamin_D", label: "Vitamine D", unit: "µg/100g"},
		{_id: "vitamin_E", label: "Vitamine E", unit: "mg/100g"},
		{_id: "vitamin_K1", label: "Vitamine K1", unit: "µg/100g"},
		{_id: "vitamin_K2", label: "Vitamine K2", unit: "µg/100g"},
		{_id: "vitamin_C", label: "Vitamine C", unit: "mg/100g"},
		{_id: "vitamin_B1", label: "Vitamine B1 ou Thiamine", unit: "mg/100g"},
		{_id: "vitamin_B2", label: "Vitamine B2 ou Riboflavine", unit: "mg/100g"},
		{_id: "vitamin_B3", label: "Vitamine B3 ou PP ou Niacine", unit: "mg/100g"},
		{_id: "vitamin_B5", label: "Vitamine B5 ou Acide pantothénique", unit: "mg/100g"},
		{_id: "vitamin_B6", label: "Vitamine B6", unit: "mg/100g"},
		{_id: "vitamin_B9", label: "Vitamine B9 ou Folates totaux", unit: "µg/100g"},
		{_id: "vitamin_B12", label: "Vitamine B12", unit: "µg/100g"}
	];



var productSchema = mongoose.Schema	(
	{
		user_id: String,
		name: String,
		quantity: Number,
		price: Number,
		discount: Number,
		producer: { type: mongoose.Schema.Types.ObjectId, ref: 'producer' },
		mainPicture: {type: String, default: "default"},
		category_1: String, // ex: fruits et légumes, boissons
		category_2: String, // ex: Légumes, bierre
		category_3: String, // variété ex: Tomate ancienne, NA , belge
		description: String, // applicable
		organicFlag: Boolean, // Bio
		labelRougeFlag: Boolean,
		permacultreFlag: Boolean,
		sustainableFlag: Boolean, //agri raisonnée
		fullSunFlag: Boolean, // plein sol
		frozenFlag: Boolean, // Surgelé
		labelFlag: Boolean, // Permet d'ajouter les mentions obligatoires
		ingredients: {  type: [ingredientSchema],   default: undefined  } 
		//nutritionalValues: {  type: RawProducts.schema,   default: undefined  } 
	}
);




var Products = mongoose.model('products', productSchema);

module.exports = Products;
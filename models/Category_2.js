var mongoose = require('mongoose');


//mongoimport --db Amikahuete --collection category_2 --file C:\Users\michael\Desktop\BoF\category_2.json  --jsonArray
//mongoexport --db Amikahuete  --collection category_2 --fields _id,name,unit --type=csv --out C:\Users\michael\Desktop\BoF\category_2.csv
var category_2Schema = mongoose.Schema(
	{ 
		name: String, // ex: légume
		unit: String // unité ou L ou kg
	}
);

var Category_2 = mongoose.model('category_2', category_2Schema);

module.exports = Category_2;



// to do : l'id ne se cast pas tres bien -> rajouter un vrai ID à catégory2 et le repporter dans rowProducts 
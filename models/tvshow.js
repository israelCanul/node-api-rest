var mongooe=require('mongoose');
var Schema=mongoose.Schema;

var tvshowSchema= new Schema({
	title:{type:String},
	year:{type:Number},
	country:{type:String},
	poster:{type:String},
	seasons:{type:Number},
	genre:{type:String,enum:[
		'Drama','Fantasi','Sci-fi','Thriller','Comedy']},
	summary:{type:String}	
});

module.exports = mongoose.model('TVShow',tvshowSchema);
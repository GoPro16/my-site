var models = require('../Database/models');

module.exports.getHome = function(req,res){
	models.db.insert(function(err){
		res.send('Inserted');
	});
}
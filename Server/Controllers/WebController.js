var models = require('../Database/models');

module.exports.getHome = function(req,res){
	models.db.insert(function(err){
		res.send('Inserted');
	});
}


module.exports.getBlogs = function(req,res){
	models.Blog.findAll({}).then(function(blogs){
		res.send(blogs);
	});
}

module.exports.postBlog = function(req,res){
	models.Blog.create({
		time:Date.now(),
		name:req.body.name,
		content:req.body.content
	}).then(function(newBlog){
		res.send(newBlog);
	}).catch(function(err){
		res.send("Error: " + err);
	});
}



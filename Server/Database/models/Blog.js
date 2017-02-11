"use strict"

module.exports = function(sequelize,DataTypes){
	var Blog = sequelize.define('Blog',{
		time: DataTypes.DATE,
		name: DataTypes.STRING,
		content: DataTypes.STRING
	},{
		classMethods:{
			//associations with other models
			associate: function(models){
				
			}
		},
		tableName:'blogs'
	}); 

	return Blog;
}
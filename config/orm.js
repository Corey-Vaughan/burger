//------ Import Connection ------//

var connection = require("../config/connection.js");

//------ ORM Setup for SQL Functions ------//

var orm = {
	selectAll: function(input, cb) {
		var queryString = "SELECT * FROM " + input + ";";
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	create: function(tableName, column, value, cb) {
		var queryString = "INSERT INTO " + tableName;
		queryString += " (";
		queryString += column.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += placeHolders(value.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, value, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	update: function(tableName, colVals, state, cb) {
		var queryString = "UPDATE " + tableName;

		queryString += " SET ";
		queryString += convertSql(colVals);
		queryString += " WHERe ";
		queryString += state;

		console.log(queryString);
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	delete: function(tableName, state, cb) {
		var queryString = "DELETE FROM " + tableNamel

		queryString += " WHERE ";
		queryString += state;

		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	}
};

//------ Export ORM for Model to use ------//
module.exports = orm;
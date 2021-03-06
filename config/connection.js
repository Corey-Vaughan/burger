//------ Connection for MySql Database ------//

var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        port: 8080,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};
//------ Start Connection ------//

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//------ Export Connection to ORM ------//
module.exports = connection;
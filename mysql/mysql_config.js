var mysql = require("mysql")

var mysql_options ={
    host: 'localhost',
    port: '3306',
    database: 'testdb1',
    user: 'root',
    password: 'admin',
    connectionLimit: 2
}


var pool = mysql.createPool(mysql_options)

module.exports = pool
//MySQL Connection Stuff

const mysql = require('mysql');// name of the module used to conect the database
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'todolist'
});

connection.connect();//conects to database

module.exports = connection;//exporting the conection so we can use it anywhere

//connection.end();
let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'tuto',
  //insecureAuth : true // be careful with this 
});
 
connection.connect()

module.exports = connection
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yq3av3xp2htxzrqp",
    password: "l6cwvc7poyfp8h12",
    database: "truw2hpj4ngfxi35"
});

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: process.env.DB_PASSWORD,
//         database: "burgers_db"
//     });
   
// };

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
var connection = require("../config/connection.js");
var orm = {
    selectAll: function (cb) {
        var query = "select * from burgers";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    insertOne: function (name, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log("new burger name: ", name);
        connection.query(query, [name], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    updateOne: function (id, cb) {
        var query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }
}

module.exports = orm;
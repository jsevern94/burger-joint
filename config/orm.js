var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },
    insertOne: function(var1, var2, var3, callback) {
        var queryString = "";
        connection.query(queryString, function (err,data) {
            if (err) throw err;
            callback(data);
        });
    },
    updateOne: function(var1, var2 ,var3, callback) {
        var queryString = "";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    }
};

module.exports = orm;
var connection = require("../config/connection.js");


function valuesToQuestionMarks(length) {
    var qMarks = [];

    for (var i = 0; i < length; i++) {
        qMarks.push("?");
    }

    return qMarks.toString();
}

var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },
    insertOne: function (table, columns, values, callback) {
        var stringColumns = columns.toString();
        var questionMarks = valuesToQuestionMarks(values.length);
        var queryString = `INSERT INTO ${table} (${stringColumns}) VALUES (${questionMarks})`;
        console.log(queryString);
        connection.query(queryString, values, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },
    updateOne: function (table, update, condition, callback) {
        var queryString = `UPDATE ${table} SET ? WHERE ${condition}`;
        connection.query(queryString, update, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    }
};

module.exports = orm;
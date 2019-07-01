var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (var1, var2, callback) {
        orm.insertOne("burgers", var1, var2, function (res) {
            callback(res);
        });
    },
    updateOne: function (var1, var2, callback) {
        orm.updateOne("burgers", var1, var2, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
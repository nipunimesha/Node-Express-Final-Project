"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDaoImpl = /** @class */ (function () {
    function ItemDaoImpl(connection) {
        this.connection = connection;
    }
    ItemDaoImpl.prototype.delete = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM item WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.find = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM item WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM item", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDaoImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO item VALUES ('" + entity.code + "','" + entity.description + "','" + entity.qty_On_Hand + "','" + entity.unitPrice + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("UPDATE item SET description = '" + entity.description + "',qty_on_hand='" + entity.qty_On_Hand + "',unit_price ='" + entity.unitPrice + "' WHERE code='" + entity.code + "'");
            _this.connection.query("UPDATE item SET description = '" + entity.description + "', address ='" + entity.qty_On_Hand + "' WHERE code='" + entity.code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return ItemDaoImpl;
}());
exports.ItemDaoImpl = ItemDaoImpl;

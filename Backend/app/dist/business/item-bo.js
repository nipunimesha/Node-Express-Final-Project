"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var ItemBO = /** @class */ (function () {
    function ItemBO() {
    }
    ItemBO.prototype.findAllItems = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = ItemDAO.findAll();
                    promise.then(function (Items) {
                        resolve(Items);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.findItem = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = ItemDAO.find(id);
                    promise.then(function (Item) {
                        resolve(Item);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.saveItem = function (Item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = ItemDAO.save(Item);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.updateItem = function (Item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = ItemDAO.update(Item);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.deleteItem = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = ItemDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return ItemBO;
}());
exports.ItemBO = ItemBO;

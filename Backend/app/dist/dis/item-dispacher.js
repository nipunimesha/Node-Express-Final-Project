"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var itemDispacher = express.Router();
itemDispacher.route("")
    .get(function (req, res) {
    res.send("find all items");
})
    .post(function (req, res) {
    res.send("Save item");
});
itemDispacher.route("/:id")
    .get(function (req, res) {
    res.send("Find a item");
})
    .delete(function (req, res) {
    res.send("Delete a item");
})
    .put(function (req, res) {
    res.send("Update  a item");
});
exports.default = itemDispacher;

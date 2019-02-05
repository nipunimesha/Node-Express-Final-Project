"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customerDispacher = express.Router();
// customerDispacher.get("",(req,res)=>{
//     res.send("Get Request");
// });
//
// customerDispacher.post("",(req,res)=>{
//     res.send("Post request");
// });
customerDispacher.route("")
    .get(function (req, res) {
    res.send("find  all customer");
})
    .post(function (req, res) {
    res.send("save customer");
});
customerDispacher.route("/:id")
    .get(function (req, res) {
    res.send("Find a customer");
})
    .delete(function (req, res) {
    res.send("Delete a customer");
})
    .put(function (req, res) {
    res.send("Update  a customer");
});
exports.default = customerDispacher;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customer_dispacher_1 = __importDefault(require("./customer-dispacher"));
var item_dispacher_1 = __importDefault(require("./item-dispacher"));
var mainDispacher = express.Router();
//
// mainDispacher.get("*",(req,res)=>{
//     res.send("<h1>Main Dispacher</h1>")
// });
exports.default = mainDispacher;
mainDispacher.use("/app/v1/customers", customer_dispacher_1.default);
mainDispacher.use("/app/v1/items", item_dispacher_1.default);

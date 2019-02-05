import express = require("express");
import cors =require("cors");



import itemDispatcher from "./item-dispatcher";
import customerDispatcher from "./customer-dispatcher";

// This will return a new instance of a router object that can be used to handle routing
const mainDispatcher = express.Router();

mainDispatcher.use(express.json());


mainDispatcher.use('/api/v1/items',itemDispatcher);
mainDispatcher.use('/api/v1/customers',customerDispatcher);

export default mainDispatcher;

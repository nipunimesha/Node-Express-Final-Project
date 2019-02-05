import express = require("express");
import {ItemBO} from "../business/item-bo";
import {error} from "util";

// This will return a new instance of a router object that can be used to handle routing
const itemDispatcher = express.Router();

itemDispatcher.route("")
    .get((req, res) => {
        const promise=new ItemBO().findAllItems();
        promise.then(items=>{
            res.status(200).json(items);
        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .post((req, res) => {

        if (!("code" in req.body && "description" in req.body && "qty_on_hand" in req.body &&  "description" in req.body
        )){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new ItemBO().saveItem(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));
    });

itemDispatcher.route("/:id")
    .get((req, res) => {
        const promise = new ItemBO().findItem(req.params.id);
        promise.then(items => {

            if (items.length > 0) {
                res.status(200).send(items[0]);
            } else {
                res.sendStatus(404);
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    })
    .delete((req, res) => {
        const promise=new ItemBO().deleteItem(req.params.id);
        promise.then(status=>{
            if (status){
                res.status(200).send(true);

            } else {
                res.sendStatus(404);
            }
        }).catch(error=>{
            res.status(500).send(error);
        })
    })
    .put((req, res) => {
        if (!("id" in req.body && "name" in req.body && "address" in req.body)) {
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id) {
            res.status(400).send("Mismatched Customer ID");
            return;
        }

        const promise = new ItemBO().updateItem(req.body);
        promise.then(status => {

            if (status) {
                res.status(200).send(true);
            } else {
                res.sendStatus(404);
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    });

export default itemDispatcher;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(code, description, qty_On_Hand, unitPrice) {
        this.code = code;
        this.description = description;
        this.qty_On_Hand = qty_On_Hand;
        this.unitPrice = unitPrice;
    }
    return Item;
}());
exports.Item = Item;

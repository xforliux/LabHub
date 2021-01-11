"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFile = exports.ItemList = void 0;
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.default = Item;
var ItemList = /** @class */ (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemList.prototype.addItems = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (x) {
            _this.push(x);
        });
    };
    return ItemList;
}(Array));
exports.ItemList = ItemList;
var ItemFile = /** @class */ (function () {
    function ItemFile() {
        this.Items = new ItemList();
    }
    ItemFile.prototype.saveToFile = function (items, password) {
        if (password === void 0) { password = null; }
    };
    return ItemFile;
}());
exports.ItemFile = ItemFile;

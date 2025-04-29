"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("./product.service");
var ps = new product_service_1.ProductService();
//let res:Array<Product>  = ps.getProducts();
ps.getProductsAync().then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
console.log("=================");

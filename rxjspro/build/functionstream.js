"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function data() {
    return (0, rxjs_1.of)(100, 200, 300, 400, 7, 3, 5, 10);
}
//data().subscribe(d => console.log(d));
data().pipe((0, rxjs_1.filter)(function (n) { return n % 2 == 0; }))
    .subscribe(function (d) { return console.log(d); });

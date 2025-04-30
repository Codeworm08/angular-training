"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//observable
var stream = (0, rxjs_1.of)(1, 2, 3, 4, 5, -1, -4, 0);
//observer
/*
stream.pipe(filter(n => n > 0)).subscribe((d)=>{
    console.log(d);
});
*/
stream.pipe((0, rxjs_1.filter)(function (n) { return n > 0; }))
    .pipe((0, rxjs_1.map)(function (n) { return n + 1; }))
    .subscribe(function (d) { return console.log(d); });
console.log("===================");
var msgs = [
    "Hello EY!!", "Welcome!!", "Happy Learning!!"
];
var msteams = (0, rxjs_1.from)(msgs);
/*
msteams.subscribe((m)=>{
    console.log(m);
});
*/
msteams.pipe((0, rxjs_1.map)(function (s) { return s.toUpperCase(); }))
    .subscribe(function (d) { return console.log(d); });

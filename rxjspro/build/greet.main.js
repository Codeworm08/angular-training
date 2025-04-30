"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_service_1 = require("./greet.service");
var gs = new greet_service_1.GreetingService();
var ref = gs.greet().subscribe({
    next: function (d) {
        console.log(d);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log('EOF');
        ref.unsubscribe();
    }
});

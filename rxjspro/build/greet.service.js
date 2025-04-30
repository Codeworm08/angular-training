"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingService = void 0;
var rxjs_1 = require("rxjs");
var GreetingService = /** @class */ (function () {
    function GreetingService() {
    }
    GreetingService.prototype.greet = function () {
        var ob = new rxjs_1.Observable(function (o) {
            setTimeout(function () {
                o.next('Hello EY!');
            }, 2000);
            setTimeout(function () {
                o.next('Welcome to RxJS!');
                //o.error('something went wrong...')
            }, 3000);
            setTimeout(function () {
                o.next('Happy Learning!');
            }, 4000);
            setTimeout(function () {
                o.complete();
            }, 5000);
        });
        return ob;
    };
    return GreetingService;
}());
exports.GreetingService = GreetingService;

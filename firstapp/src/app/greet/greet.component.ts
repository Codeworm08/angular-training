import { Component } from "@angular/core";

@Component({
    selector:'app-greet',
    templateUrl:'./greet.component.html',
    styleUrl :'./greet.component.css',
    standalone:false
})
export class GreetComponent {

    public msg:string='Greetings from greet comp!!'
}
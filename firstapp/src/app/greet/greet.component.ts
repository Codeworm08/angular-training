import { Component } from "@angular/core";
import { GreetService } from "./greet.service";

@Component({
    selector:'app-greet',
    templateUrl:'./greet.component.html',
    styleUrl :'./greet.component.css',
    standalone:false,
    
})
export class GreetComponent {
    public msgs:Array<string> =[];
    //constructor injection
    constructor(private gs:GreetService){
        this.msgs = gs.getMsgs();
    }


}
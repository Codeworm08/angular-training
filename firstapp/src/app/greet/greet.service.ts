import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GreetService {

    public getMsgs():Array<string>
    {
       return ['Welcome','Hello','Hi','Bye'];  
    }

}
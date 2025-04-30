import { GreetingService } from "./greet.service";

let gs: GreetingService = new GreetingService();

let ref = gs.greet().subscribe({
    next: (d) => {
        console.log(d);
    }, 
    error: (err) => {
        console.log(err);
    },
    complete:()=>{
        console.log('EOF');
        ref.unsubscribe();
    }
})
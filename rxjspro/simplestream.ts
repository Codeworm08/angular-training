import { filter, from, map, of } from "rxjs";

//observable
let stream = of(1,2,3,4,5,-1,-4,0);

//observer
/*
stream.pipe(filter(n => n > 0)).subscribe((d)=>{
    console.log(d);
});
*/

stream.pipe(filter(n => n > 0))
         .pipe(map(n => n+1))
            .subscribe(d => console.log(d));


console.log("===================");

let msgs:Array<string> = [
    "Hello EY!!","Welcome!!","Happy Learning!!"
];

let msteams = from(msgs);
/*
msteams.subscribe((m)=>{
    console.log(m);
});
*/

msteams.pipe(map(s => s.toUpperCase()))
          .subscribe(d => console.log(d));

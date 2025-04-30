import { filter, Observable, of } from "rxjs";

function data():Observable<number>
{
    return of(100,200,300,400,7,3,5,10);
}
//data().subscribe(d => console.log(d));

data().pipe(filter(n => n%2==0))
        .subscribe(d => console.log(d));

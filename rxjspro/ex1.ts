import { Observable, of } from "rxjs";

function data():Observable<number>
{
    return of(1,2,3,4,5);
}

data().subscribe(d => console.log(d))
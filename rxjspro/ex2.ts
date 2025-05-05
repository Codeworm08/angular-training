import { filter, Observable, of } from "rxjs";

function data():Observable<number>
{
    return of(1,2,3,4,5,6,7,8,9,10)
}

data().pipe(filter(n=>n%2!=0))
      .subscribe(d=>console.log(d*10))
import { interval, take } from "rxjs";

const numbers = interval(1000)

const take5numbers = numbers.pipe(take(5))

take5numbers.subscribe(d=>console.log(d))
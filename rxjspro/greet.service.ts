import { Observable } from "rxjs";
export class GreetingService {
    public greet(): Observable<string> {
        let ob = new Observable<string>((o) => {

            setTimeout(() => {
                o.next('Hello EY!');
            }, 2000);
            setTimeout(() => {
                o.next('Welcome to RxJS!');
                //o.error('something went wrong...')
            }, 3000);
            setTimeout(() => {
                o.next('Happy Learning!');
            }, 4000);
            setTimeout(() => {
                o.complete();
            }, 5000);

        });
        return ob;
    }
}
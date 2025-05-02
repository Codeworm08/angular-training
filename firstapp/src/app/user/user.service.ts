import { Observable } from "rxjs";
import { User } from "./user";
export class UserService {
    private usersdata: Array<User> = [
        { userid: 'U1', username: 'John', email: 'carter@msn.com' },
        { userid: 'U2', username: 'James', email: 'bond@msn.com' }
    ];
    public getUsers(): Promise<Array<User>> {
        let pr:Promise<Array<User>> = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.usersdata);
            },3000);
        })
        return pr;
    }
    public getUsersRx(): Observable<Array<User>> {
        let ob:Observable<Array<User>> = new Observable((o)=>{
            o.next(this.usersdata);
        })
        return ob;
    }
}
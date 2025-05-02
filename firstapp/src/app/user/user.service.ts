import { User } from "./user";
export class UserService {
    private usersdata: Array<User> = [
        { userid: 'U1', username: 'John', email: 'carter@msn.com' },
        { userid: 'U2', username: 'James', email: 'bond@msn.com' }
    ];
    public getUsers(): Array<User> {
        return this.usersdata;
    }

}
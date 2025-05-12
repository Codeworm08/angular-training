import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://jsonplaceholder.typicode.com/users";
  private postUrl: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient, private router:Router) { }
  public getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.url);
  }
  public addUser(user: User): Observable<User>{
    return this.http.post<User>(this.postUrl, user);
  }
  public viewPosts(userId:number):void{
    this.router.navigate(['/user', userId, 'posts'])
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit , OnDestroy{
  users: Array<User> = [];
  public ngOnInit() {
    let us: UserService = new UserService();
    this.users = us.getUsers();
  }
  ngOnDestroy(): void {
      this.users =[];
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  users: Array<User> = [];
  /*public ngOnInit() {
    let us: UserService = new UserService();
     us.getUsers().then(data => {
        this.users=data;
     }).catch();

  }*/

  public ngOnInit() {
    let us: UserService = new UserService();
      us.getUsersRx().subscribe(data=>{
      this.users= data;
    });
  }

  ngOnDestroy(): void {
    this.users = [];
  }
}

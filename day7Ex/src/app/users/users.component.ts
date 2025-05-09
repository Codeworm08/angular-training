import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-users',
  standalone: false,  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: Array<User> = [];
  newUser: User = {id: '', name: '', email: '', phone: ''};
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.load();
  }
  public load():void {
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
    })
  }

}

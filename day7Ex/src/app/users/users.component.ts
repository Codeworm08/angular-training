import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports:[CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: Array<User> = [];
  newUser: User = {id: '', name: '', email: '', phone: ''};
  loading: boolean = false;
  err: string = '';
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.load();
  }
  public load():void {
    this.loading = true;

    this.userService.getUsers().subscribe(data=>{
      this.users = data;
      console.log('data: ',this.users);
      this.loading = false;
    },error=>{
      console.error(error);
      this.err = error;
      this.loading=false;
    });

  }

}

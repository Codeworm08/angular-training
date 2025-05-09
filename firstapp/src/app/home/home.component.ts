import { Component, Input, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  login:string | null= '';
  @Input()
  public hdr:string='';

  dob:Date = new Date();

  msgs$:Observable<string> = from(['Happy Learning','All the best!!']);
  
  ngOnInit(): void {
      this.login = sessionStorage.getItem('login');
  }
}

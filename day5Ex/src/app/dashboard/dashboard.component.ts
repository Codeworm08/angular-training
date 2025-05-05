import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor (private loggingService:LoggingService){}

  ngOnInit(){
    const log = this.loggingService.log("Dashboard Component Initialized");
    console.log(log);
  }
}

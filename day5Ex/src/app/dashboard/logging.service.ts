import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  log(mssg:string){
    return "Log : "+mssg;
  }
  warn(){
    return "Warning";
  }
  error(){
    return "Error";
  }
}

import { inject } from "@angular/core"
import { CounterService } from "./counter.service"
describe('testing service',()=>{
  it('inc shoud return 6 if input is 5',()=>{
    let counterService:CounterService = new CounterService();
    expect(counterService.inc(5)).toEqual(6);
  });

})
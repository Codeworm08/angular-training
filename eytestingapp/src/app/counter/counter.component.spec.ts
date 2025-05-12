import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';
//test suite
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers:[CounterService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial value of count should be zero', () => {
    expect(component.count).toEqual(0);
  })

  it('count value should be 1 , id inc button is clicked', () => {
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(component.count).toEqual(1);
  })

});

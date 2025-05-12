import { TestBed, ComponentFixture } from "@angular/core/testing"
import { CalcComponent } from './calc.component'
import { CalcService } from './calc.service';
    describe('MyComponent', () => {
        let component: CalcComponent;
        let fixture: ComponentFixture<CalcComponent>;
    
        beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [CalcComponent],
            providers:[CalcService]
          }).compileComponents();
    
          fixture = TestBed.createComponent(CalcComponent);
          component = fixture.componentInstance;
          fixture.detectChanges(); // Initialize the component
        });

    it('should create', () => {
        expect(component).toBeDefined();
    });
    it('shoudl return 50 if a = 20 and b = 30', () => {
        let calc: CalcComponent = fixture.nativeElement.componentInstance;
        let n1 = fixture.nativeElement.querySelector("input[name='n1']");
        n1.value = "20";
        let n2 = fixture.nativeElement.querySelector("input[name='n2']");
        n2.value = "30";
        fixture.nativeElement.querySelector("button").click();
        fixture.detectChanges();
        let res = fixture.nativeElement.querySelector('h3').textContent;
        expect(res).toEqual("50");
    });
})

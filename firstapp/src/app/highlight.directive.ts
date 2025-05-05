import { Directive, ElementRef, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  @Input('appHighlight')
  appHighlight:string='';

  constructor(private eleRef:ElementRef) { 
    this.eleRef.nativeElement.style.backgroundColor=this.appHighlight;
  }


}

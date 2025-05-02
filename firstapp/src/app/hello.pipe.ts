import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello',
  standalone: false
})
export class HelloPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return "Hello : " + value + ","  + args[0];
  }

}

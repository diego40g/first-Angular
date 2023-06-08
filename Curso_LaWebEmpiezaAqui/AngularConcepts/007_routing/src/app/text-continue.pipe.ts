import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textContinue'
})
export class TextContinuePipe implements PipeTransform {

  transform(value: string): string {
    if(value.toString().length > 140){
      value = value.substring(0, 140)
      value += " Read more..."
    }
    return value;
  }

}

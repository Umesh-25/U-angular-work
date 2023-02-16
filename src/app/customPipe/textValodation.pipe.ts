import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textVal',
})
export class TextValidationPipe implements PipeTransform {
  transform(value: any):any {
    return  value + '$'
  }
}

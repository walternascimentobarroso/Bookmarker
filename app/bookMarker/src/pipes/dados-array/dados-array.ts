import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dadosArray',
})
export class DadosArrayPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}

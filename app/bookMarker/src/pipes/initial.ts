import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'initial',
})
export class Initial implements PipeTransform {
  /**
   * Takes a value and returns first letter
   */
  transform(value, args) {
    //console.log(value);
    //console.log(args);
    let keys = [];
    for (var k in value) {
      if (value[k].concluido == args) {
        value[k].key = k;
        keys.push(value[k]);
      }
    }
    return keys;
  }
}

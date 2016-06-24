import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'cut'
})
export class CutPipe  implements PipeTransform {

  transform(value: string, limit: number): any {
    if(value && value.length > limit){
        return value.substring(0, limit) + '...';
    }
    return value;
  }
}

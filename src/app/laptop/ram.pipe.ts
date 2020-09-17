import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ram'
})
export class RamPipe implements PipeTransform {

  transform(value: unknown, ramSize:number): unknown {
    return ramSize + " GB";
  }

}

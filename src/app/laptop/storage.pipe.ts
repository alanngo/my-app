import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storage'
})
export class StoragePipe implements PipeTransform {

  transform(value: number, storage:number): string {
    if (storage >=1000)
      return value/1000+" TB"
    return value+" GB"
  }

}

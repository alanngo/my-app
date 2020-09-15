import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(value: unknown, hours: number): string 
  {
    if (hours<30)
      return "freshman"
    if (hours<60)
      return "sophmore"
    if (hours<90)
      return "junior"
    return "senior "
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsTitle'
})
export class StudentsPipe implements PipeTransform {

  transform(value: unknown, gender: string): string {
    switch (gender.toLowerCase())
    {
      case 'male':
        return "Mr. "+value;
      case 'female':
        return "Ms. "+value;
    }
  }

}

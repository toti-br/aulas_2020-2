import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakecase'
})
export class SnakecasePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').join('_').toLocaleLowerCase();
  }

}

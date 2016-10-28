import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(value: string, arg: string): any {
    let limit = parseInt(arg, 10) || 10;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

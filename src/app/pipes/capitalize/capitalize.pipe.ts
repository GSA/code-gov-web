import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
  transform(value: string, arg?: string): any {
    /*
      This check follows the same behavior as Angular 2 standard
      pipes that handle strings such as UppercasePipe.
      Note that a returned null value gets converted to an
      empty string in the template where this pipe is used, which prevents
      problems if this pipe is chained with others. See truncate.pipe.spec.ts
      for tests that illustrate this behavior.
    */
    if (value == null) {
      return null;
    }

    let length: number = value.length;
    if (length === 0) {
      return '';
    } else if (length === 1) {
      return value.toUpperCase();
    } else if (length >= 2) {
      return value[0].toUpperCase() + value.substring(1);
    }
  }
}

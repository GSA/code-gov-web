import { Pipe, PipeTransform } from '@angular/core';
import { LANGUAGES } from './';

@Pipe({
  name: 'languageIcon'
})

export class LanguageIconPipe implements PipeTransform {
  transform(value: string): any {
    switch (value) {
      case 'html':
        value = 'html5';
        break;
      case 'css':
        value = 'css3';
        break;
      default:
        break;
    }

    if (LANGUAGES.indexOf(value) > -1) {
      return value;
    } else {
      return 'code_badge';
    }
  }
}

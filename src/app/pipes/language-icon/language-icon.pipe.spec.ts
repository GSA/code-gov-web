import { LanguageIconPipe } from './language-icon.pipe';
import { Pipe, PipeTransform } from '@angular/core';


/**
 * Unit tests for IsDefinedPipe including tests for
 * IsDefinedPipe.transform() and tests where the pipe
 * is integrated into a template.
 */
describe('LanguageIconPipe', () => {
  let pipe: LanguageIconPipe;

  beforeEach(() => {
      pipe = new LanguageIconPipe();
  });

  describe('parameterize', () => {
    it('returns a lowercased version of the argument', () => {
      let value = 'CoolValue';

      expect(pipe.parameterize(value)).toEqual('coolvalue');
    });

    it('returns a underscored version of the argument', () => {
      let value = 'Cool Value';

      expect(pipe.parameterize(value)).toEqual('cool_value');
    });
  });

  describe('transform', () => {
    it('returns code_badge if the argument is not defined in LANGUAGES', () => {
      let value = 'made up language';

      expect(pipe.transform(value)).toEqual('code_badge');
    });

    it('returns css3 if css is the argument value', () => {
      let value = 'css';

      expect(pipe.transform(value)).toEqual('css3');
    });

    it('returns html5 if html is the argument value', () => {
      let value = 'html';

      expect(pipe.transform(value)).toEqual('html5');
    });

    it('returns a Language if the argument is defined in LANGUAGES', () => {
      let value = 'python';

      expect(pipe.transform(value)).toEqual('python');
    });
  });
});

import { Component, ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { MonacoEditorService } from './monaco-editor.service';

@Component({
  selector: 'monaco-validator',
  template: require('./monaco-validator.template.html'),
  styles: [require('./monaco-validator.style.scss')]
})

export class MonacoValidatorComponent {
  @Input() private errors = [];
  @Output() private onClickError = new EventEmitter<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  scrollToError(error) {
    this.onClickError.emit(error);
  }
}

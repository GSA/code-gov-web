import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { items } from './help-wanted.json';

@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html')
})

export class HelpWantedComponent {
  private items = items;
  private filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.filterForm = formBuilder.group({
      languages: {},
      skillLevels: {},
      timeRequireds: {},
      types: {},
      impacts: {},
    });
  }

  ngOnInit() {
    this.buildFormControl('languages', this.getLanguages());
    this.buildFormControl('skillLevels', this.getSkillLevels());
    this.buildFormControl('timeRequireds', this.getTimeRequireds());
    this.buildFormControl('types', this.getTypes());
    this.buildFormControl('impacts', this.getImpacts());
  }

  buildFormControl(property, values) {
    this.filterForm.setControl(property, this.formBuilder.group(values.reduce((obj, key) => {
      obj[key] = this.formBuilder.control(false);
      return obj;
    }, {})));
  }

  getLanguages() {
    const languages = this.items.reduce((acc, item) => {
      item.languages.forEach(language => {
        acc[language] = true;
      });

      return acc;
    }, {});

    return Object.keys(languages);
  }

  getSkillLevels() {
    const skillLevels = this.items.reduce((acc, item) => {
      acc[item.skill] = true;

      return acc;
    }, {});

    return Object.keys(skillLevels);
  }

  getTimeRequireds() {
    const timeRequireds = this.items.reduce((acc, item) => {
      acc[item.effort] = true;

      return acc;
    }, {});

    return Object.keys(timeRequireds);
  }

  getTypes() {
    const types = this.items.reduce((acc, item) => {
      acc[item.type] = true;

      return acc;
    }, {});

    return Object.keys(types);
  }

  getImpacts() {
    const impacts = this.items.reduce((acc, item) => {
      acc[item.impact] = true;

      return acc;
    }, {});

    return Object.keys(impacts);
  }
}

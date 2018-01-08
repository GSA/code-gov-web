import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { items } from './help-wanted.json';
import { map, uniq } from 'lodash';


@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html')
})

export class HelpWantedComponent {
  private items = items;
  private filteredItems;
  private filterForm: FormGroup;
  private activeTab: string;

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

    this.filteredItems = items;

    this.filterForm.valueChanges.subscribe(data => {
      this.filteredItems = this.filterItems(this.items);
    });

    this.activeTab = 'featured';
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
    return uniq(map(items, "skill")).filter(Boolean);
  }

  getTimeRequireds() {
    return uniq(map(items, "effort")).filter(Boolean);
  }

  getTypes() {
    return uniq(map(items, "type")).filter(Boolean);
  }

  getImpacts() {
    return uniq(map(items, "impact")).filter(Boolean);
  }

  getFilteredValues(property) {
    return Object.keys(this.filterForm.value[property]).filter(key => this.filterForm.value[property][key]);
  }

  filterLanguages(result) {
    const filteredLanguages = this.getFilteredValues('languages');

    if (filteredLanguages.length > 0) {
      if (Array.isArray(result.languages)) {
        return filteredLanguages.every(l => result.languages.includes(l));
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  filterSkillLevels(result) {
    const filteredSkillLevels = this.getFilteredValues('skillLevels');

    if (!result.skill) {
      return true;
    }

    return filteredSkillLevels.every(sl => result.skill === sl);
  }

  filterTimeRequired(result) {
    const filterTimeRequireds = this.getFilteredValues('timeRequireds');

    if (!result.effort) {
      return true;
    }

    return filterTimeRequireds.every(tr => String(result.effort) === tr);
  }

  filterTypes(result) {
    const filteredTypes = this.getFilteredValues('types');

    if (!result.type) {
      return true;
    }

    return filteredTypes.every(t => result.type === t);
  }

  filterImpacts(result) {
    const filteredImpacts = this.getFilteredValues('impacts');

    if (!result.impact) {
      return true;
    }

    return filteredImpacts.every(i => result.impact === i);
  }

  filterByTab(result) {
    return result[this.activeTab];
  }

  filterItems(items) {
    return items.filter(this.filterLanguages.bind(this))
      .filter(this.filterSkillLevels.bind(this))
      .filter(this.filterTimeRequired.bind(this))
      .filter(this.filterTypes.bind(this))
      .filter(this.filterImpacts.bind(this))
      .filter(this.filterByTab.bind(this));
  }

  setActiveTab(tab, $event) {
    $event.preventDefault();

    this.activeTab = tab;
    this.filteredItems = this.filterItems(this.items);
  }
}

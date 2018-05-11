import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HelpWantedService } from '../../services/help-wanted';
import { Option } from './help-wanted.option';

import { content, images } from '../../../../config/code-gov-config.json';

@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html')
})

export class HelpWantedComponent {
  private content: any = content.help_wanted;
  private bannerImage;
  private items;
  private filteredItems;
  private filterForm: FormGroup;
  private activeTab: string;
  private mobile: boolean;
  private options: Option[];
  private displayPopup: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private helpWantedService: HelpWantedService
  ) {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
    this.items = [];
    this.filteredItems = [];
    this.filterForm = this.formBuilder.group({
      'impact': {},
      'language': {},
      'license': {},
      'show': {},
      'skill': {},
      'effort': {},
      'type': {},
      'usageType': {}
    });
    this.mobile = false;
    this.options = [];
    this.displayPopup = false;
  }

  ngOnInit() {

    this.setMobile();

    this.helpWantedService.getTasks().subscribe(tasks => {

      this.items = tasks;
      this.filteredItems = tasks;

      this.options = [
        { display: 'Show', key: 'show', options: ['Featured', 'Active', 'Popular', 'All'], version: 'mobile' },
        { display: 'Language', key: 'languages', options: this.getTaskValues('languages'), version: 'both' },
        { display: 'Skill Level', key: 'skill', options: this.getTaskValues('skill'), version: 'both' },
        { display: 'Time Required', key: 'effort', options: this.getTaskValues('effort'), version: 'both' },
        { display: 'Type', key: 'type', options: this.getTaskValues('type'), version: 'both' },
        { display: 'Impact', key: 'impact', options: this.getTaskValues('impact'), version: 'both' },
        { display: 'License', key: 'license', options: this.getTaskValues('license'), version: 'none' },
        { display: 'Usage Type', key: 'usageType', options: this.getTaskValues('usageType'), version: 'none' },
      ];

      this.buildFormControls(this.options);

      this.filterForm.valueChanges.subscribe(data => {
        if (!this.mobile) {
          this.applyFilters();
        }
      });

    });

    this.activeTab = 'Featured';

  }

  closePopup() {
    this.displayPopup = false;
  }

  applyFilters() {
    this.displayPopup = false;
    this.filteredItems = this.filterItems(this.items);
  }

  buildFormControl(property, values) {

    // making sure filter out undefined values
    values = values.filter(value => value !== undefined && value !== null);

    if (values.length > 0) {
      try {
        this.filterForm.setControl(property, this.formBuilder.group(values.reduce((obj, key) => {
          obj[key] = this.formBuilder.control(false);
          return obj;
        }, {})));
      } catch (error) {
        console.error('property:', property);
        console.error('values:', values);
        console.error('[error in buildFormControl]:', error);
      }
    }
  }

  buildFormControls(options) {
    options.forEach(option => {
      this.buildFormControl(option.key, option.options);
    });
  }

  filterFormOptionsByVersions(versions) {
    return this.options.filter(option => versions.indexOf(option.version) > -1);
  }

  getDesktopFormOptions() {
    return this.filterFormOptionsByVersions(['desktop', 'both']);
  }

  getMobileFormOptions() {
    return this.filterFormOptionsByVersions(['mobile', 'both']);
  }

  getTaskValues(key) {
    let taskValues = new Set();
    this.items.forEach(item => {
      let value = item[key];
      if (Array.isArray(value)) {
        value.forEach(element => {
          if (element !== undefined && element !== null) {
            taskValues.add(element);
          }
        });
      } else {
        if (value !== undefined && value !== null) {
          taskValues.add(value);
        }
      }
    });
    return Array.from(taskValues);
  }

  getFilteredValues(property) {
    let keys = [];
    let obj = this.filterForm.value[property];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        if (value !== undefined && value !== null  && value !== false) {
          keys.push(key);
        }
      }
    }
    return keys;
  }

  filterBy(key) {
    return item => {

      const filteredValues = this.getFilteredValues(key);

      if (filteredValues.length === 0) {

        // we're not filtering by this key
        // so return true for all the items
        return true;

      } else if (filteredValues.length > 0) {

        let itemValue = item[key];

        if (itemValue === undefined) {
          // we're filtering by this key
          // but a help-wanted item doesn't
          // include this key, so filter it out
          return false;
        }

        return filteredValues.some(value => {
          if (Array.isArray(itemValue)) {
            return itemValue.indexOf(value) > -1;
          } else {
            return String(value) === String(itemValue);
          }
        });

      }

    };
  }

  filterByTab(result) {

    if (this.activeTab === 'All') {
      return true;
    } else {
      return result[this.activeTab.toLowerCase()];
    }
  }

  filterItems(items) {

    this.options.forEach(option => {
      // we ignore show bc we use filterByTab for that
      if (option.key !== 'show') {
        items = items.filter(this.filterBy(option.key));
      }
    });

    items = items.filter(this.filterByTab.bind(this));

    return items;
  }

  setActiveTab(tab, $event) {
    $event.preventDefault();

    this.activeTab = tab;
    this.applyFilters();
  }

  setMobile() {

    if (window.screen.width <= 600) {
      this.mobile = true;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setMobile();
    this.closePopup();
  }

  openPopup() {
    this.displayPopup = true;
  }

}

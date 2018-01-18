import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { flattenDeep, keys, map, pickBy, reduce, uniq, zipObject } from 'lodash';
import { HelpWantedService } from '../../services/help-wanted';


@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html')
})

export class HelpWantedComponent {
  private items;
  private filteredItems;
  private filterForm: FormGroup;
  private activeTab: string;
  private mobile: boolean;
  private options: Object[];

  constructor(
    private formBuilder: FormBuilder,
    private helpWantedService: HelpWantedService
  ) {
    this.items = [];
    this.filteredItems = [];
    //this.filterForm = new FormGroup();
    this.filterForm = this.formBuilder.group({
      Language: {},
      "Skill Level": {},
      "Time Required": {},
      "Type": {},
      "Impact": {}
    });
    this.mobile = false;
  }

  ngOnInit() {
    console.error("starting help-wanted.component.ngOnInit");
    if (window.screen.width <= 600) {
      this.mobile = true;
    }
    

    this.helpWantedService.getTasks().then(tasks => {

      console.error("tasks:", tasks);

      this.items = tasks;
      this.filteredItems = tasks;

      this.options = [
        {
          display: "Language",
          key: "languages"
        },
        {
          display: "Skill Level",
          key: "skill"
        },
        {
          display: "Time Required",
          key: "effort"
        },
        {
          display: "Type",
          key: "type"
        },
        {
          display: "Impact",
          key: "impact"
        }
      ];
      
      this.options.map(option => {
        option.options = this.getTaskValues(option.key);
      });
      
      console.log("this.options:", this.options);

      this.buildFormControls(this.options);

      console.log("filterForm:", this.filterForm);
      
      this.filterForm.valueChanges.subscribe(data => {
        console.log("subscridbed changes:", this.mobile, data);
        if (!this.mobile) {
          this.applyFilters();
        }
      });

    });
    
    this.activeTab = 'featured';

  }
  
  applyFilters() {
    this.filteredItems = this.filterItems(this.items);
  }

  buildFormControl(property, values) {
    try {
      this.filterForm.setControl(property, this.formBuilder.group(values.reduce((obj, key) => {
        obj[key] = this.formBuilder.control(false);
        return obj;
      }, {})));
    } catch (error) {
      console.error("property:", property);
      console.error("values:", values);
      console.error("[error in buildFormControl]:", error) 
    }
  }
  
  buildFormControls(options) {
    options.forEach(option => {
      //console.log("[buildFormControls] values:", option.options);
      this.buildFormControl(option.key, option.options);
    });
  }


  getTaskValues(key) {
    return uniq(flattenDeep(map(this.items, key))).filter(Boolean);
  }

  getFilteredValues(property) {
    return keys(pickBy(this.filterForm.value[property]));
  }
  
  filterBy(key) {
    return result => {
      
      let result_value = result[key];
      
      if (!result_value) {
        return true;
      }
      
      const filteredValues = this.getFilteredValues(key);
      
      return filteredValues.every(value => {
        if (Array.isArray(result_value)) {
          return result_value.includes(value);
        } else {
          return String(value) === String(result_value);
        }
      });
      
    };
  }

  filterByTab(result) {
    return result[this.activeTab];
  }

  filterItems(items) {
    console.log("starting to filterItems with", items);
    
    let filtered = this.items; 

    this.options.forEach(option => {
      filtered = filtered.filter(this.filterBy(option.key));
    });
    
    filtered = filtered.filter(this.filterByTab.bind(this));
    
    return filtered;
  }

  setActiveTab(tab, $event) {
    $event.preventDefault();

    this.activeTab = tab;
    this.filteredItems = this.filterItems(this.items);
  }
}

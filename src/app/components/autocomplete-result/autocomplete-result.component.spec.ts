import { APP_BASE_HREF } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AutocompleteResultComponent } from './autocomplete-result.component';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

@Component({
  selector: 'test-component-wrapper',
  template: '<autocomplete-result [result]="result"></autocomplete-result>'
})
class AutocompleteProjectResultComponentWrapper {
  result = {
    agency: 'gsa',
    repoID: 'example_id',
    name: 'example'
  };
}

@Component({
  selector: 'test-component-wrapper',
  template: '<autocomplete-result [result]="result"></autocomplete-result>'
})
class AutocompleteAgencyResultComponentWrapper {
  result = {
    id: 'gsa',
    name: 'General Services Administration'
  };
}

describe('AutocompleteResultComponent', () => {
  describe('with a Project result', () => {
    let fixture: ComponentFixture<AutocompleteProjectResultComponentWrapper>;
    let component: AutocompleteResultComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterModule.forRoot([])
          ],
          declarations: [ AutocompleteProjectResultComponentWrapper, AutocompleteResultComponent ],
          providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
          ],
          schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        });
        fixture = TestBed.createComponent(AutocompleteProjectResultComponentWrapper);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    it('should have defined AutocompleteResultComponent instance', () => {
        expect(component).toBeDefined();
    });

    it('should emit an event when clicked', () => {
      spyOn(component.onSuggestionSelected, 'emit');
      component.handleSuggestionSelected();

      expect(component.onSuggestionSelected.emit).toHaveBeenCalledWith({
        agency: 'gsa',
        repoID: 'example_id',
        name: 'example'
      });
    });
  });

  describe('with an Agency result', () => {
    let fixture: ComponentFixture<AutocompleteAgencyResultComponentWrapper>;
    let component: AutocompleteResultComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterModule.forRoot([])
          ],
          declarations: [ AutocompleteAgencyResultComponentWrapper, AutocompleteResultComponent ],
          providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
          ],
          schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        });
        fixture = TestBed.createComponent(AutocompleteAgencyResultComponentWrapper);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    it('should have defined AutocompleteResultComponent instance', () => {
        expect(component).toBeDefined();
    });

    it('should emit an event when clicked', () => {
      spyOn(component.onSuggestionSelected, 'emit');
      component.handleSuggestionSelected();

      expect(component.onSuggestionSelected.emit).toHaveBeenCalledWith({
        id: 'gsa',
        name: 'General Services Administration'
      });
    });
  });
});

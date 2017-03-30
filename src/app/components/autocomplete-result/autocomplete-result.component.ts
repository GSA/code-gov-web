import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { AgencyService } from '../../services/agency';
import { TermService } from '../../services/term';

@Component({
  selector: 'autocomplete-result',
  styles: [require('./autocomplete-result.style.scss')],
  template: require('./autocomplete-result.template.html')
})

export class AutocompleteResultComponent {
  @Input() result;
  public resourceLoaded: boolean = false;
  public resource: Object = {};
  private termType: string;
  private agency: Object;
  private agencyAttribute: string;
  private agenciesSub: Subscription;

  constructor(
    private agencyService: AgencyService,
    private termService: TermService
  ) {}

  private filterTermType(position) {
    let splitTermType = this.result.term_type.split('.');

    return splitTermType[position];
  }

  newAgenciesQuery(): Observable<any> {
    return this.agencyService.getAgencies();
  }

  newAgenciesSubscription(): Subscription {
    return this.newAgenciesQuery().subscribe(
      (response: any) => {
        if (response['agencies'].length > 0) {
          this.agencyService.setAgencies(response['agencies']);
          this.agency = this.agencyService.getAgency(this.resource['agencyAttribute'], this.result.term);

          this.resource['name'] = this.agency['name'];

          if (this.termService.uniqueTerm(this.resource['name'])) {
            this.termService.addTerm(this.resource);
            this.resource['iconId'] = 'assets/img/logos/agencies/' + this.agency['acronym']  + '-50x50.png';
            this.resource['imageIcon'] = true;
            this.resource['url'] = '/agencies/' + this.agency['acronym'];
            this.resourceLoaded = true;
          }
        }
      }
    );
  }


  getResourceAttributes(resource){
    switch (resource.termType) {
      case 'agency':
        this.setAgencyAttribute();

        if (typeof this.agenciesSub === 'undefined') {
          this.agenciesSub = this.newAgenciesSubscription();
        } else {
          this.agency = this.agencyService.getAgency(this.resource['agencyAttribute'], this.result.term);
        }

        break;
      default:
        //Do nothing & hide the resource?
        break;
    }
  }

  ngOnDestroy() {
    if (typeof this.agenciesSub !== 'undefined') {
      this.agenciesSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.setTermType();
    this.getResourceAttributes(this.resource);
  }

  setAgencyAttribute() {
    this.resource['agencyAttribute'] = this.filterTermType(1);
  }

  setTermType() {
    this.resource['termType'] = this.filterTermType(0);
  }
}

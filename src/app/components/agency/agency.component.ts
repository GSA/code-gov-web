import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AgencyService } from '../../services/agency';
import { LanguageIconPipe } from '../../pipes/language-icon';
import { PluralizePipe } from '../../pipes/pluralize';
import { SeoService } from '../../services/seo';
import { TruncatePipe } from '../../pipes/truncate';

@Component({
  selector: 'agency',
  styles: [require('./agency.styles.scss')],
  template: require('./agency.template.html')
})

export class AgencyComponent implements OnInit, OnDestroy {
  public agency: any;
  public hasRepos: boolean = false;
  public repos;
  public searchQuery: string;
  private agencySub: Subscription;

  constructor(
    private agencyService: AgencyService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  routeParams() {
    return this.route.params;
  }

  newRouteSubscription(): Subscription {
    return this.routeParams().subscribe(
      (response: any) => {
        let id = response['id'];

        if(this.agencyService.agencies) {
          //Agencies already fetched from API
          this.setAgency(id);
        } else {
          //Set the list of Agencies to limit API requests
          this.agencyService.getAgencies().subscribe(
            (response: any) => {
              this.agencyService.setAgencies(response['agencies']);
              this.setAgency(id);
            }
          );
        }
      }
    );
  }


  ngOnDestroy() {
    this.hasRepos = false;
    this.agency = null;
    if (this.agencySub) this.agencySub.unsubscribe();
  }

  ngOnInit() {
    this.agencySub = this.newRouteSubscription();
  }

  setAgency(id) {
    let agencyQuery = this.agencyService.getAgency('acronym', id);

    //Check for Agency before setting it
    if(agencyQuery) {
      this.searchQuery = 'agency.acronym=' + id;
      this.agency = this.agencyService.getAgency('acronym', id);
    }
  }
}

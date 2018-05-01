import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Agency, ClientService } from '../../../../../services/client';
import { StatusService } from '../../../../../services/status';

import { Subscription } from 'rxjs/Subscription';
import { SeoService } from '../../../../../services/seo';


@Component({
  selector: 'compliance-dashboard',
  template: require('./compliance-dashboard.template.html')
})

export class ComplianceDashboardComponent implements OnInit, OnDestroy {
  agencyIds: string[] = [];
  public statuses = [];
  public updated;
  private statusesSub: Subscription;

  constructor(
    private clientService: ClientService,
    private statusService: StatusService
  ) {
  }

  ngOnInit() {
    this.getAgencyIds();
    this.getStatuses();
  }

  ngOnDestroy() {
    if (this.statusesSub) this.statusesSub.unsubscribe();
  }


  getAgencyIds() {
    this.clientService.getAgencies().subscribe(
      (agencies: Agency[]) => {
        this.agencyIds = agencies.map(agency => agency.acronym);
      }
    );
  }

  _setRequirementStatuses(agencyRequirements) {
    let requirements = [];
    let overallStatus = 'noncompliant';

    for (let requirement in agencyRequirements) {
      if (agencyRequirements.hasOwnProperty(requirement)) {
        const rValue = agencyRequirements[requirement];

        let requirementStatus = 'noncompliant';

        if (rValue >= 1) {
          requirementStatus = 'compliant';
        } else if (rValue >= 0.25 && rValue < 1) {
          requirementStatus = 'partial';
        }

        if (requirement !== 'overallCompliance') {
          requirements.push({ text: requirement, status: requirementStatus });
        } else {
          overallStatus = requirementStatus;
        }
      }
    }
    return { requirements, overallStatus };
  }

  _getCodePath(status) {

    if (this.agencyIds.find(x => x === status)) {
      return '/explore-code/agencies/' + status;
    }

    return null;
  }
  getStatuses() {
    this.statusesSub = this.clientService.getStatuses().
      subscribe((result) => {
        if (result) {
          for (let statusAgency in result.statuses) {
            if (result.statuses.hasOwnProperty(statusAgency) &&
                result.statuses[statusAgency].metadata.agency.complianceDashboard) {

              let agencyStatus = result.statuses[statusAgency];

              const {requirements, overallStatus} = this._setRequirementStatuses(agencyStatus.requirements);

              this.statuses.push({
                id: statusAgency,
                agency: {
                  id: result.statuses[statusAgency].metadata.agency.id,
                  name: result.statuses[statusAgency].metadata.agency.name,
                  overall: overallStatus,
                  codePath: this._getCodePath(status)
                },
                requirements: requirements
              });

              this.updated = result.timestamp;
            }
          }

          this.statuses = this.statuses.sort((a, b) => {
            return a.agency.id - b.agency.id;
          });
        } else {
          console.log('Error.');
        }
    });

  }

  getIcon(status) {
    return `assets/img/logos/agencies/${status.id}.png`;
  }

}

import { Injectable } from '@angular/core';
import { Agency } from '../client';

@Injectable()

export class AgencyService {

  getIcon(agency: Agency): string {
    return `assets/img/logos/agencies/${agency.acronym}-50x50.png`;
  }

}

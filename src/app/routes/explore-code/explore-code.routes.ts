import { Routes, RouterModule } from '@angular/router';
import {
  ExploreCodeComponent,
  AgenciesComponent,
  AgencyComponent
} from '../../utils/app-components';
import { AGENCIES } from '../../services/agency';
import { DataResolver } from '../../app.resolver';


export const EXPLORE_CODE_ROUTES: Routes = [
  {
    path: 'explore-code',
    component: ExploreCodeComponent,
    children: [
      { path: '', redirectTo: 'agencies/' + AGENCIES[0].id },
      { path: 'agencies', component: AgenciesComponent, children: [
        { path: '' },
        { path: ':id', component: AgencyComponent }
      ] }
    ]
  }
];

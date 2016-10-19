import { Routes, RouterModule } from '@angular/router';
import {
  ExploreCodeComponent,
  AgenciesComponent,
  AgencyComponent
} from '../../utils/app-components';
import { DataResolver } from '../../app.resolver';


export const EXPLORE_CODE_ROUTES: Routes = [
  {
    path: 'explore-code',
    component: ExploreCodeComponent,
    children: [
      { path: '', redirectTo: 'agencies'},
      { path: 'agencies', component: AgenciesComponent, children: [
        { path: '' },
        { path: ':id', component: AgencyComponent }
      ] }
    ]
  }
];

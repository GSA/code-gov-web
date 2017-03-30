import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent, AgencyComponent} from '../../utils/app-components';


export const AGENCY_ROUTES: Routes = [
  {
    path: 'agencies',
    component: AgenciesComponent,
    children: [
      { path: ':id', component: AgencyComponent }
    ]
  }
];

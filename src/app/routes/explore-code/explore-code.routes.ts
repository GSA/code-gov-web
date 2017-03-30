import { Routes, RouterModule } from '@angular/router';
import {
  AgenciesComponent,
  AgencyComponent,
  ExploreCodeComponent,
  RepoComponent,
  ReposComponent,
  SearchResultsComponent
} from '../../utils/app-components';


export const EXPLORE_CODE_ROUTES: Routes = [
  {
    path: 'explore-code',
    component: ExploreCodeComponent
  }
];

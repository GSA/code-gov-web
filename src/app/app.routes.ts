import { Routes, RouterModule } from '@angular/router';
import {
   FourOhFourComponent,
   HomeComponent,
   PrivacyPolicyComponent,
   SearchResultsComponent
 } from './utils/app-components';
import { AGENCY_ROUTES } from './routes/agencies';
import { EXPLORE_CODE_ROUTES } from './routes/explore-code';
import { POLICY_GUIDE_ROUTES } from './routes/policy-guide';
import { REPO_ROUTES } from './routes/repos';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  ...AGENCY_ROUTES,
  ...EXPLORE_CODE_ROUTES,
  ...POLICY_GUIDE_ROUTES,
  ...REPO_ROUTES,
  { path: 'search', component: SearchResultsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '404', component: FourOhFourComponent },
  { path: '**', component: FourOhFourComponent }
];

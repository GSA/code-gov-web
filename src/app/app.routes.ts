import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { PolicyGuideComponent } from './components/policy-guide';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'policy-guide', component: PolicyGuideComponent }
];

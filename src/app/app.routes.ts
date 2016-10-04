import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './components/policy-guide/docs';
import { HomeComponent } from './components/home';
import { PolicyGuideComponent } from './components/policy-guide';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'policy-guide',
    component: PolicyGuideComponent,
    children: [
      { path: 'docs',  component: DocsComponent }
    ]
  }
];

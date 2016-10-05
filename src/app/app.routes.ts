import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './components/policy-guide/docs';
import { HomeComponent } from './components/home';
import {
  IntroductionComponent
} from './components/policy-guide/docs/overview/introduction';
import { OverviewComponent } from './components/policy-guide/docs/overview';
import { PolicyGuideComponent } from './components/policy-guide';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'policy-guide',
    component: PolicyGuideComponent,
    children: [
      {
        path: 'docs',
        component: DocsComponent,
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
            children: [
              { path: 'introduction', component: IntroductionComponent
              }
            ]
          }
        ]
     }
    ]
  }
];

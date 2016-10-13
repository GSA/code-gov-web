import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './components/policy-guide/docs';
import { HomeComponent } from './components/home';
import {
  IntroductionComponent
} from './components/policy-guide/docs/overview/introduction';
import { OverviewComponent } from './components/policy-guide/docs/overview';
import {
  OverviewInventoryComponent
} from './components/policy-guide/docs/overview/overview-inventory';
import {
  OverviewPilotComponent
} from './components/policy-guide/docs/overview/overview-pilot';
import { PolicyGuideComponent } from './components/policy-guide';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'policy-guide',
    component: PolicyGuideComponent,
    children: [
      { path: '', redirectTo: 'docs/overview/introduction'},
      {
        path: 'docs',
        component: DocsComponent,
        children: [
          { path: '', redirectTo: 'overview/introduction'},
          {
            path: 'overview',
            component: OverviewComponent,
            children: [
              { path: 'introduction', component: IntroductionComponent },
              { path: 'inventory', component: OverviewInventoryComponent }
              { path: 'pilot', component: OverviewPilotComponent }
            ]
          }
        ]
     }
    ]
  }
];

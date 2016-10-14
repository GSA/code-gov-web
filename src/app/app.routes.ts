import { Routes, RouterModule } from '@angular/router';
import {
  ComplianceComponent,
  ComplianceAcquiringCodeComponent,
  ComplianceInventoryCodeComponent,
  ComplianceLicensingComponent,
  ComplianceMeasuringCodeComponent,
  ComplianceMetadataSchemaComponent,
  ComplianceWhatsRequiredComponent,
  DocsComponent,
  HomeComponent,
  IntroductionComponent,
  OverviewComponent,
  OverviewInventoryComponent,
  OverviewPilotComponent,
  OverviewTrackingProgressComponent,
  PolicyGuideComponent
}from './utils/app-components';
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
              { path: '', redirectTo: 'introduction'},
              { path: 'introduction', component: IntroductionComponent },
              { path: 'inventory', component: OverviewInventoryComponent },
              { path: 'pilot', component: OverviewPilotComponent },
              {
                path: 'tracking-progress',
                component: OverviewTrackingProgressComponent
              }
            ]
          },
          {
            path: 'compliance',
            component: ComplianceComponent,
            children: [
              { path: '', redirectTo: 'whats-required'},
              {
                path: 'acquiring-code',
                component: ComplianceAcquiringCodeComponent
              },
              {
                path: 'inventory-code',
                component: ComplianceInventoryCodeComponent
              },
              {
                path: 'licensing',
                component: ComplianceLicensingComponent
              },
              {
                path: 'measuring-code',
                component: ComplianceMeasuringCodeComponent
              },
              {
                path: 'metadata-schema',
                component: ComplianceMetadataSchemaComponent
              },
              {
                path: 'whats-required',
                component: ComplianceWhatsRequiredComponent
              }
            ]
          }
        ]
     }
    ]
  }
];

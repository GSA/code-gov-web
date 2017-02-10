import { Component } from '@angular/core';
import { SeoService } from '../../../../../services/seo';

@Component({
  selector: 'compliance-dashboard',
  template: require('./compliance-dashboard.template.html')
})

export class ComplianceDashboardComponent {
constructor(private seoService: SeoService) {
    seoService.setTitle('Policy Compliance - Dashboard', true);
    seoService.setMetaDescription('Dashboard illustrating federal agency compliance with the 90-day and 120-day policy requirements.');
    seoService.setMetaRobots('Index, Follow');
  }
}

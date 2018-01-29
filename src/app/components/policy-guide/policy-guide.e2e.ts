import { browser, by, element } from 'protractor';

describe('Policy guide component', () => {

  beforeEach(() => {
    browser.get('/#/policy-guide/docs/compliance/dashboard');
  });

  it('should have department of agriculture', () => {
    const agencyNames: Array<string> = [
        'Department of Agriculture',
        'Department of Health and Human Services',
        'Department of Justice',
        'National Science Foundation',
        'National Archives',
        'Social Security Administration',
        'Department of Labor',
        'Department of Treasury',
        'Small Business Administration',
        'Department of State',
        'Agency for International Development',
        'General Services Administration',
        'Department of Education',
        'Department of Transportation',
        'Department of Interior',
        'Department of Energy',
        'Department of Veterans Affairs',
        'Department of Homeland Security',
        'Environmental Protection Agency',
        'Department of Commerce',
        'Department of Defense',
        'Department of Housing and Urban Development',
        'National Aeronautics and Space Administration',
        'Nuclear Regulatory Commission',
        'Office of Personnel Management',
    ];
    const elementList = element.all(by.css('.dashboard-agency-heading'));
    let resultAgencyList: Array<string> = [];

    elementList.map(elem => {
      elem.$('h3').getText().then(text => {
        resultAgencyList.push(text);
        resultAgencyList.sort();
        agencyNames.sort();
        expect(resultAgencyList).toEqual(agencyNames);
      });
    });
  });
});

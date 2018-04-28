
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  XHRBackend,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ClientService } from './client.service';

describe('ClientService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ClientService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  describe('#getStatuses', () => {
    it('should return an Observable<AgencyStatus> new', () => {
      inject([ClientService, XHRBackend], (clientService, mockBackend) => {
        const dummyStatuses = {
          timestamp: '',
          statuses: {
            GSA: {
              status: 'NOT FULLY COMPLIANT: 2 ERRORS',
              issues: [
                {
                  agency: 'General Services Administration',
                  project_name: 'Search.gov',
                  issues: {
                    enhancements: [],
                    warnings: [],
                    errors: [
                      {
                        keyword: 'type',
                        dataPath: '.repositoryURL',
                        schemaPath: '#/properties/repositoryURL/type',
                        params: {
                          type: 'string'
                        },
                        'message': 'should be string'
                      }
                    ]
                  }
                },
                {
                  agency: 'General Services Administration',
                  project_name: 'Cron scripts',
                  issues: {
                    enhancements: [],
                    warnings: [],
                    errors: [
                      {
                        'keyword': 'type',
                        'dataPath': '.repositoryURL',
                        'schemaPath': '#/properties/repositoryURL/type',
                        'params': {
                          'type': 'string'
                        },
                        'message': 'should be string'
                      }
                    ]
                  }
                }
              ],
              version: '2.0.0',
              metadata: {
                agency: {
                  name: 'General Services Administration',
                  acronym: 'GSA',
                  website: 'https://gsa.gov/',
                  codeUrl: 'https://www.gsa.gov/code.json',
                  fallback_file: 'GSA.json',
                  requirements: {
                    agencyWidePolicy: 1,
                    openSourceRequirement: 1,
                    inventoryRequirement: 1,
                    schemaFormat: 0.5,
                    overallCompliance: 1
                  },
                  complianceDashboard: true
                }
              },
              wasFallbackUsed: false,
              requirements: {
                agencyWidePolicy: 1,
                openSourceRequirement: 1,
                inventoryRequirement: 1,
                schemaFormat: 0.5,
                overallCompliance: 1
              }
            }
          }
        };
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(dummyStatuses)
          })));
        });
        clientService.getStatuses().subscribe(statuses => {
          expect(statuses.statuses['GSA'].issues.length).toBe(2);
        });
      });
    });
  });

  describe('#getAgencies', () => {
    beforeAll(() => {
      const dummyAgencyResponse = `{
        'total': 10,
        'agencies': [
          {
            'acronym': 'DOT',
            'name': 'Department of Transportation',
            'website': 'https://www.transportation.gov/',
            'codeUrl': 'https://www.transportation.gov/code.json',
            'numRepos': 127
          },
          {
            'acronym': 'DOL',
            'name': 'Department of Labor',
            'website': 'https://www.dol.gov',
            'codeUrl': 'https://www.dol.gov/code.json',
            'numRepos': 154
          },
          {
            'acronym': 'DOJ',
            'name': 'Department of Justice',
            'website': 'https://justice.gov',
            'codeUrl': 'https://www.justice.gov/code.json',
            'numRepos': 14
          },
          {
            'acronym': 'HUD',
            'name': 'Department of Housing and Urban Development',
            'website': 'https://www.hud.gov/',
            'codeUrl': 'https://www.hud.gov/code.json',
            'numRepos': 172
          },
          {
            'acronym': 'HHS',
            'name': 'Department of Health and Human Services',
            'website': 'https://hhs.gov',
            'codeUrl': 'https://www.hhs.gov/code.json',
            'numRepos': 7
          },
          {
            'acronym': 'DOE',
            'name': 'Department of Energy',
            'website': 'https://energy.gov/',
            'codeUrl': 'https://www.energy.gov/code.json',
            'numRepos': 881
          },
          {
            'acronym': 'ED',
            'name': 'Department of Education',
            'website': 'https://ed.gov/',
            'codeUrl': 'https://www.ed.gov/code.json',
            'numRepos': 49
          },
          {
            'acronym': 'DOD',
            'name': 'Department of Defense',
            'website': 'https://www.defense.gov/',
            'codeUrl': 'https://www.code.mil/code.json',
            'numRepos': 8
          },
          {
            'acronym': 'DOC',
            'name': 'Department of Commerce',
            'website': 'https://www.commerce.gov/',
            'codeUrl': 'https://www.commerce.gov/code.json',
            'numRepos': 3
          },
          {
            'acronym': 'USDA',
            'name': 'Department of Agriculture',
            'website': 'https://usda.gov/',
            'codeUrl': 'https://www.usda.gov/code.json',
            'numRepos': 21
          }
        ]
      }`;
      const expectedAgencyList = [
        'Department of Transportation',
        'Department of Labor',
        'Department of Justice',
        'Department of Housing and Urban Development',
        'Department of Health and Human Services',
        'Department of Energy',
        'Department of Education',
        'Department of Defense',
        'Department of Commerce',
        'Department of Agriculture'
      ];
      const expectedAgencyInfo = `{
        "acronym": "DOT",
        "name": "Department of Transportation",
        "website": "https://www.transportation.gov/",
        "codeUrl": "https://www.transportation.gov/code.json",
        "numRepos": 127
      }`;
      const agency = 'DOT';
    });
    it('should return a list of agency names', () => {
      inject([ClientService, XHRBackend], (clientService, mockBackend) => {

        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(this.dummyAgencyResponse)
          })));
        });
        clientService.getAgencies().subscribe(agencies => {
          expect(agencies).toEqual(this.expectedAgencyList);
        });

      });
    });
    it('should return info for the specified agency', () => {
      inject([ClientService, XHRBackend], (clientService, mockBackend)  => {
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(this.dummyAgencyResponse)
          })));
        });
        clientService.getAgencyByAcronym(this.agency).subscribe(agency => {
          expect(agency).toEqual(this.expectedAgencyInfo);
        });
      });
    });
  });
});


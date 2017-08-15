import { ChangeDetectorRef, Component } from '@angular/core';
import { clone } from 'lodash';
import { MonacoEditorService } from '../../monaco-editor';
import * as Clipboard from 'clipboard';

@Component({
  selector: 'upgrade-schema',
  template: require('./upgrade-schema.template.html'),
  styles: [require('./upgrade-schema.style.scss')]
})

export class UpgradeSchemaComponent {
  private monaco: any;
  private beforeEditor: any;
  private beforeText: string;
  private afterEditor: any;
  private _afterModel: any;
  private isBeforeMinimized = false;
  private isAfterMinimized = true;
  private clipboard: any;
  private errors = [];

  constructor(
    private monacoEditor: MonacoEditorService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    monacoEditor.addSchema('1.0.1.json', ['-1.0.1.json'], require('../../../schemas/1.0.1.json'));
    monacoEditor.addSchema('2.0.0.json', ['-2.0.0.json'], require('../../../schemas/2.0.0.json'));
  }

  ngAfterViewInit() {
    this.clipboard = new Clipboard('.upgrade-schema__copy-button', {
      text: () => {
        return this.afterEditor.getValue();
      }
    });
  }

  ngOnDestroy() {
    this.clipboard.destroy();
  }

  set afterModel(m) {
    this._afterModel = m;
    this._afterModel.onDidChangeDecorations(() => {
      this.errors = this._afterModel.getAllDecorations()
        .filter(decoration => decoration.isForValidation);
      this.changeDetectorRef.detectChanges();
    });
  }

  get afterModel() {
    return this._afterModel;
  }

  scrollToError(error) {
    const { startMarker, endMarker } = error;
    const range = new this.monaco.Range(
      startMarker.position.lineNumber,
      startMarker.position.column,
      endMarker.position.lineNumber,
      endMarker.position.column,
    );
    this.afterEditor.revealRange(range);
    this.afterEditor.setPosition(startMarker.position);
    this.afterEditor.focus();
  }

  upgradeOptionalFields(project) {
    project.vcs = project.vcs || '';
    project.disclaimerText = project.disclaimerText || '';
    project.disclaimerURL = project.disclaimerURL || '';
    project.relatedCode = [{
      codeName: '',
      codeURL: '',
      isGovernmentRepo: true,
    }];
    project.reusedCode = [{
      name: '',
      URL: '',
    }];
  }

  upgradeToPermissions(project) {
    project.permissions = {};

    project.permissions.licenses = [];

    if (project.license) {
      project.permissions.licenses.push({
        URL: project.license,
        name: null
      });
    } else {
      project.permissions.licenses.push({
        URL: null,
        name: null
      });
    }

    delete project.license;

    if (project.openSourceProject === 1) {
      project.permissions.usageType = 'openSource';
      project.permissions.exemptionText = null;
    } else if (project.governmentWideReuseProject === 1) {
      project.permissions.usageType = 'governmentWideReuse';
      project.permissions.exemptionText = null;
    } else if (String(project.exemption) === '1') {
      project.permissions.usageType = 'exemptByLaw';
      project.permissions.exemptionText = 'The sharing of the source code is restricted by ' +
        'law or regulation, including—but not limited to—patent or intellectual property ' +
        'law, the Export Asset Regulations, the International Traffic in Arms Regulation, ' +
        'and the Federal laws and regulations governing classified information.';
    } else if (String(project.exemption) === '2') {
      project.permissions.usageType = 'exemptByNationalSecurity';
      project.permissions.exemptionText = 'The sharing of the source code would create an ' +
        'identifiable risk to the detriment of national security, confidentiality of ' +
        'Government information, or individual privacy.';
    } else if (String(project.exemption) === '3') {
      project.permissions.usageType = 'exemptByAgencySystem';
      project.permissions.exemptionText = 'The sharing of the source code would create ' +
        'an identifiable risk to the stability, security, or integrity of the agency’s ' +
        'systems or personnel.';
    } else if (String(project.exemption) === '4') {
      project.permissions.usageType = 'exemptByAgencyMission';
      project.permissions.exemptionText = 'The sharing of the source code would create an ' +
        'identifiable risk to agency mission, programs, or operations.';
    } else if (String(project.exemption) === '5') {
      project.permissions.usageType = 'exemptByCIO';
      project.permissions.exemptionText = 'The CIO believes it is in the national interest ' +
        'to exempt sharing the source code.';
    } else {
      project.permissions.usageType = null;
      project.permissions.exemptionText = null;
    }
    delete project.openSourceProject;
    delete project.governmentWideReuseProject;
    delete project.exemption;
    delete project.exemptionText;
  }

  upgradeUpdatedToDate(project) {
    project.date = {
      created: '',
      lastModified: '',
      metadataLastUpdated: '',
    };

    if (project.updated) {
      if (project.updated.sourceCodeLastModified) {
        project.date.lastModified = project.updated.sourceCodeLastModified;
      }

      if (project.updated.metadataLastUpdated) {
        project.date.metadataLastUpdated = project.updated.metadataLastUpdated;
      }

      delete project.updated;
    }
  }

  upgradeProject(project) {
    project.repositoryURL = project.repository;
    delete project.repository;

    project.homepageURL = project.homepage;
    delete project.homepage;

    this.upgradeToPermissions(project);

    project.laborHours = null;

    this.upgradeUpdatedToDate(project);
    this.upgradeOptionalFields(project);

    return project;
  }

  upgradeProjectsToReleases(upgradedCodeJson) {
    if (Array.isArray(upgradedCodeJson.projects)) {
      upgradedCodeJson.releases = upgradedCodeJson.projects
        .map(project => this.upgradeProject(project));
      delete upgradedCodeJson.projects;
    }
  }

  transformCodeJson(value) {
    const upgradedCodeJson = value;

    upgradedCodeJson.version = '2.0.0';
    upgradedCodeJson.measurementType = {
      method: null
    };

    this.upgradeProjectsToReleases(upgradedCodeJson);

    return upgradedCodeJson;
  }

  onDidCreateBeforeEditor(editor) {
    this.beforeEditor = editor;
  }

  onDidCreateAfterEditor(editor) {
    this.afterEditor = editor;
  }

  isValidBeforeJson() {
    try {
      JSON.parse(this.beforeEditor.getValue());

      return true;
    } catch (e) {
      return false;
    }
  }

  upgradeContent(e) {
    try {
      const parsedCodeJson = JSON.parse(this.beforeEditor.getValue());
      const transformedJson = this.transformCodeJson(clone(parsedCodeJson));
      const transformedString = JSON.stringify(transformedJson, null, '\t');

      this.afterEditor.setValue(transformedString);

      this.isBeforeMinimized = true;
      this.isAfterMinimized = false;
    } catch (e) {
      console.log(e);
    }
  }

  toggleBeforeMinimized() {
    this.isBeforeMinimized = !this.isBeforeMinimized;
  }

  toggleAfterMinimized() {
    this.isAfterMinimized = !this.isAfterMinimized;
  }
}

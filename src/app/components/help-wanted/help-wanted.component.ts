import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { HelpWantedService } from '../../services/help-wanted';
import { StateService } from '../../services/state';
import { Option } from './help-wanted.option';
import * as allLanguages from '../../../enums/languages.json';
import { content, images } from '../../../../config/code-gov-config.json';
import { uniq } from '../../utils/uniq';

@Component({
  selector: 'help-wanted',
  styles: [require('./help-wanted.styles.scss')],
  template: require('./help-wanted.template.html'),
  encapsulation: ViewEncapsulation.None,
})

export class HelpWantedComponent {
  public bannerImage: SafeStyle;
  public content: any = content.help_wanted;
  public isLoading = true;
  public results = [];
  public filteredTasks = [];
  public filterTags = [];
  public finalResults = [];
  public hostElement: ElementRef;
  public impacts = [];
  public pageSize = 10;
  public routeSubscription: Subscription;
  public total: number;
  public types = [];
  private tasks = [];
  private activeTab: string;

  constructor(
    private sanitizer: DomSanitizer,
    private helpWantedService: HelpWantedService
  ) {
    this.bannerImage = this.sanitizer.bypassSecurityTrustStyle(`url('${images.background}')`);
  }

  ngOnInit() {

    this.helpWantedService.getTasks().subscribe((tasks: any[]) => {

      this.tasks = tasks;
      this.filteredTasks = tasks;
      
      this.impacts = uniq(tasks.map(task => task.impact)).filter(Boolean).sort();
      this.types = uniq(tasks.map(task => task.type)).filter(Boolean).sort();

    });
    this.activeTab = 'Featured';

  }

  setActiveTab(tab, $event) {
    $event.preventDefault();
    this.activeTab = tab;
  }

}

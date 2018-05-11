import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MobileService } from '../../services/mobile';

import { content } from '../../../../config/code-gov-config.json';

/**
 * Class representing a sidebar.
 */

@Component({
  selector: 'sidebar',
  styles: [require('./sidebar.style.scss')],
  template: require('./sidebar.template.html'),
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnDestroy, AfterViewInit {
  menuActive: boolean;
  activeMenuSub: Subscription;
  showTitle: boolean;
  @ViewChild('sidebarTitle') sidebarTitle: ElementRef;
  private browse_by_title: string = content.browse_projects.browse_by_title;

  /**
   * Constructs a SidebarComponent.
   *
   * @constructor
   * @param {MobileService} mobileService - service that detects whether the user is on a mobile device
   * @param {ChangeDetectorRef} changeDetector - service for alerting Angular to update
   */
  constructor(
    private mobileService: MobileService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.menuActive = false;
    this.showTitle = true;

    this.activeMenuSub = mobileService.activeMobileMenu$.subscribe(
      menuStatus => {
        this.menuActive = menuStatus;
      }
    );
  }

  /**
   * After the view is added to the DOM, show the sidebar title only if it has
   * children elements.
   */
  ngAfterViewInit() {
    this.showTitle = this.sidebarTitle.nativeElement.children.length > 0;
    this.changeDetector.detectChanges();
  }

  /**
   * On removal from DOM, remove listener for mobile sizing.
   */
  ngOnDestroy() {
    if (this.activeMenuSub) this.activeMenuSub.unsubscribe();
  }
}

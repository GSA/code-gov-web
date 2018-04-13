import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MobileService } from '../../services/mobile';
import { SearchInputComponent } from '../search-input';

import { twitter } from '../../../../config/code-gov-config.json';

@Component({
  selector: 'header-navigation',
  styles: [require('./header-navigation.style.scss')],
  template: require('./header-navigation.template.html'),
  host: {
    '(window:scroll)': 'onScrollHandler($event)',
  },
})

export class HeaderNavigationComponent {
  searchQuery: string = '';
  isAtTop: boolean = true;
  isSearchBoxShown: boolean = false;
  searchBoxActiveSubscription: Subscription;
  color: string = 'white';
  dropdownSearchBox: boolean = true;
  twitterHandle: string = twitter.handle;
  @ViewChild(SearchInputComponent) child: SearchInputComponent;


  constructor(
    public router: Router,
    private mobileService: MobileService,
  ) {
    this.searchBoxActiveSubscription = this.mobileService.activeSearchBox$.subscribe(
      isSearchBoxShown => this.isSearchBoxShown = isSearchBoxShown);
  }

  ngOnDestroy() {
    this.searchBoxActiveSubscription.unsubscribe();
  }

  /**
   * Whenever the form is submitted, perform a search and then reset the search
   * query.
   */
  handleFormSubmission() {
    if (this.searchQuery && this.searchQuery.length > 0) {
      this.search();
      this.resetSearchQuery();
    } else {
      console.log('No search terms were entered, so do nothing');
    }
  }

  /**
   * Reset the search query to a blank value.
   */
  resetSearchQuery() {
    this.searchQuery = '';
  }

  /**
   * Navigate to the search results page.
   *
   * @return {void}
   */
  search() {
    this.router.navigateByUrl('/search?q=' + this.searchQuery);
  }

  /**
   * Whether we are on an Policy Guide page.
   */
  isPolicyGuide() {
    return this.router.isActive('/policy-guide', false);
  }

  /**
   * Triggers whenever the window is scrolled.
   *
   * @param $event - the scrolling event
   */
  onScrollHandler($event) {
    const top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    this.isAtTop = top === 0;
  }

  showSearchBox() {
    this.mobileService.showSearchBox();
    this.child.focus();
  }

  hideSearchBox() {
    this.mobileService.hideSearchBox();
    this.child.blur();
  }

  toggleSearchBox() {
    if (this.isSearchBoxShown) {
      this.hideSearchBox();
    } else {
      this.showSearchBox();
    }
  }
}

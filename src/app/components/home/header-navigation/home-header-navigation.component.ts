import { Component } from '@angular/core';
import { toRouterLink, Link } from '../../../utils/urls';
import { content, title } from '../../../../../config/code-gov-config.json';

interface MenuOption {
  links: Link[];
  expanded?: boolean;
}

@Component({
  selector: 'home-header-navigation',
  styles: [
    require('./home-header-navigation.style.scss'),
    require('../../header-navigation/header-navigation.style.scss'),
  ],
  template: require('../../header-navigation/header-navigation.template.html'),
  host: {
    '(window:scroll)': 'onScrollHandler($event)',
  },
})

export class HomeHeaderNavigationComponent {
  private isAtTop: boolean = true;
  private color: string = 'dark transparent';
  private dropdownSearchBox: boolean = false;
  private title: string = title;
  private headerContent: any = content.header;
  private menu: MenuOption[];
  private expanded: boolean = false;
  private height: string = '';
  private forkMeUrl: boolean = content.header.fork_me_url;

  constructor() {
    this.menu = content.header.menu.map(option => {
      if (option.links) {
        option.links.forEach(link => {
          link.routerLink = toRouterLink(link.url);
        });
        option.expanded = false;
      } else if (option.url) {
        option.routerLink = toRouterLink(option.url);
      }
      return option;
    });
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

  onClickMenuOption(selected, event) {
    // make sure to close all other menuOptions
    this.menu.forEach(menuOption => {
      if (menuOption !== selected) {
        menuOption.expanded = false;
      }
    });

    selected.expanded = !selected.expanded;

    this.expanded = this.menu.filter(option => option.expanded).length > 0;

    this.updateMenuSize(event);
  }

  updateMenuSize(event) {
    if (this.expanded) {
      let nav = document.querySelector('header.main nav.main');
      let computedStyle = window.getComputedStyle(nav);
      let paddingTop = Number(computedStyle['padding-top'].replace('px', ''));
      let paddingBottom = Number(computedStyle['padding-bottom'].replace('px', ''));
      let padding = paddingTop + paddingBottom;
      let navHeight = nav.querySelector('ul').clientHeight;
      let selectedSubMenu = event.target.nextElementSibling;

      // need to directly add the class even though Angular will take care of it
      // because it needs to be done synchronously before getting height from
      // menu when it appears
      let li = event.target.parentElement;
      li.className = 'expanded';
      let dropdownHeight = selectedSubMenu.clientHeight;
      this.height = padding + navHeight + dropdownHeight;
    } else {
      this.height = null;
    }
  }

  // don't have to worry about this with home page
  // because all choices lead to another page
  // without home header component
  closeAllMenus() { }
}

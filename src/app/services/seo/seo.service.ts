import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Injectable()

export class SeoService {

  private baseTitle: string;
  private titleService: Title;
  private headElement: HTMLElement;
  private metaDescription: HTMLElement;
  private robots: HTMLElement;
  private DOM: any;

  constructor(titleService: Title){
    this.baseTitle = "· Code.gov"
    this.titleService = titleService;
    this.DOM = getDOM();
    this.headElement = this.DOM.query('head');
    this.metaDescription = this.getOrCreateMetaElement('description');
    this.robots = this.getOrCreateMetaElement('robots');
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(newTitle: string, baseTitle = false) {
    if(baseTitle === true)
      newTitle += " · Code.gov"
    this.titleService.setTitle(newTitle);
  }

  public getMetaDescription(): string {
    return this.metaDescription.getAttribute('content');
  }

  public setMetaDescription(description: string) {
    this.metaDescription.setAttribute('content', description);
  }

  public getMetaRobots(): string {
    return this.robots.getAttribute('content');
  }

  public setMetaRobots(robots: string) {
    this.robots.setAttribute('content', robots);
  }

  private getOrCreateMetaElement(name: string): HTMLElement {
    let el: HTMLElement;
    el = this.DOM.query('meta[name=' + name + ']');
    if (el === null) {
      el = this.DOM.createElement('meta');
      el.setAttribute('name', name);
      this.headElement.appendChild(el);
    }
    return el;
  }
}

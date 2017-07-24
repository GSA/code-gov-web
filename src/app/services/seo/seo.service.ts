import { Inject, Injectable, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MetaService } from '@ngx-meta/core';

@Injectable()

export class SeoService {

  private baseTitle: string;
  private headElement: HTMLElement;
  private robots: HTMLElement;
  private DOM: any;
  private rendererFactory: RendererFactory2;

  constructor(
    @Inject(DOCUMENT) document,
    @Inject(RendererFactory2) rendererFactory,
    private readonly meta: MetaService
  ) {
    this.baseTitle = '· Code.gov';
    this.rendererFactory = rendererFactory;
    this.DOM = document;
    this.headElement = this.DOM.head;
    this.robots = this.getOrCreateMetaElement('robots');
  }

  public setTitle(newTitle: string, baseTitle = false) {
    if (baseTitle === true)
      newTitle += ' · Code.gov';

    this.meta.setTitle(newTitle);
  }

  public setMetaDescription(description: string) {
    this.meta.setTag('description', description);
  }

  public getMetaRobots(): string {
    return this.robots.getAttribute('content');
  }

  public setMetaRobots(robots: string) {
    this.robots.setAttribute('content', robots);
  }

  private getOrCreateMetaElement(name: string): HTMLElement {
    let el: HTMLElement;
    el = this.DOM.querySelector('meta[name=' + name + ']');
    if (el === null) {
      const renderer = this.rendererFactory.createRenderer(this.DOM, {
        id: '-1',
        encapsulation: ViewEncapsulation.None,
        styles: [],
        data: {}
      });
      el = renderer.createElement('meta');
      renderer.setAttribute(el, 'name', name);
      renderer.appendChild(this.headElement, el);
    }
    return el;
  }
}

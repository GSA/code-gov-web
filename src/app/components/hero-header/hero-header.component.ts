import { Component, Input } from '@angular/core';

@Component({
    selector: 'hero-header',
    styles: [require('./hero-header.style.scss')],
    template: require('./hero-header.template.html'),
})

export class HeroHeaderComponent {
    @Input() title: string;
    
}
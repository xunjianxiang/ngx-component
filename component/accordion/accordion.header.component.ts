'use strict';

import { Component, TemplateRef } from '@angular/core';
import { NgxAccordionItemComponent } from './accordion.item.component';

@Component({
    selector: 'ngx-accordion-header',
    template: '<ng-content></ng-content>',
    host: {
        '(click)': 'toggle()',
        'class': 'panel-heading'
    }
})

export class NgxAccordionHeaderComponent {

    constructor (private parent: NgxAccordionItemComponent) {}

    toggle () {
        this.parent.toggle();
    }

}

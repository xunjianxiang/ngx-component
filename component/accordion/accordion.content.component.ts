'use strict';

import { Component } from '@angular/core';

@Component({
    selector: 'ngx-accordion-content',
    template: '<ng-content></ng-content>',
    host: {
        class: 'panel-body'
    }
})

export class NgxAccordionContentComponent {}

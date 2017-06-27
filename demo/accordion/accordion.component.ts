'use strict';

import { Component, Output } from '@angular/core';

@Component({
    selector: 'demo-accordion',
    template: require('./accordion.component.html')
})

export class DemoAccordionComponent {

    private accordions = [
        {
            header: '标题1',
            content: '内容1'
        },
        {
            header: '标题2',
            content: '内容2'
        },
        {
            header: '标题3',
            content: '内容3'
        }
    ];

}

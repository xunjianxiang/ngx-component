'use strict';

import { Component } from '@angular/core';

@Component({
    selector: 'demo-switch',
    template: require('./switch.component.html')
})

export class DemoSwitchComponent {

    private basic_value: boolean = true;
    private custome_value: string = '1';
    private disabled_value: boolean = false;
    private hook_value: string = '1';
    private before (next) {
        let result = window.confirm('Are you sure to toggle this switch!')
        result && next();
    }

    private after (next) {
        console.info('Now, you change the value of switch!')
        // alert('Switch complete!');
        next();
    }

}

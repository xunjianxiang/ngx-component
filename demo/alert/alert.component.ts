'use strict';

import { Component } from '@angular/core';

@Component({
    selector: 'demo-alert',
    template: require('./alert.component.html')
})

export class DemoAlertComponent {

    private list = [];

    constructor () {
        this.reset();
    }

    close (item) {
        this.remove(item)
    }

    reset () {
        this.list = [
            {
                type: 'info',
                message: 'This is a info alert will dismiss after 2 seconds!',
                timeout: 2000
            },
            {
                type: 'success',
                message: 'This is a success alert will dismiss after 5 seconds!',
                timeout: 5000
            },
            {
                type: 'warning',
                message: 'This is a warning alert will dismiss after 10 seconds!',
                timeout: 10000
            },
            {
                type: 'danger',
                message: 'This is a danger alert will dismiss after 15 seconds!',
                timeout: 15000
            },
            {
                type: 'info',
                message: 'This is a info alert, you must manually close!',
                closable: true
            }
        ];
    }

    remove (item) {
        let index = this.list.indexOf(item);
        this.list.splice(index, 1);
    }

}

'use strict';

import { Component, Input, Output, OnInit, EventEmitter, NgModule } from '@angular/core';

import { attributeParse } from '../util/parse.util';

@Component({
    selector: 'ngx-alert',
    template: require('./alert.component.html')
})

export class NgxAlertComponent implements OnInit {
    private _closable: boolean;
    @Input() type: string;
    @Input()
    set closable (value) {
        this._closable = attributeParse(value);
    }
    get closable () {
        return this._closable;
    }
    @Input() timeout: number;

    @Output() dismiss = new EventEmitter();

    private timeoutInstance: any;

    ngOnInit () {
        this.setTimeoutInstance();
    }

    close () {
        this.clearTimeoutInstance();
        this.dismiss.emit();
    }

    setTimeoutInstance () {
        if (!+this.timeout) {
            return;
        }
        this.timeoutInstance = setTimeout(() => {
            this.dismiss.emit();
        }, this.timeout);
        this.timeout = 0;
    }

    clearTimeoutInstance () {
        clearTimeout(this.timeoutInstance);
    }

}

'use strict';

import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { attributeParse } from '../util/parse.util';
import { NgxEventManager } from '../util/events.util';

@Component({
    selector: 'ngx-switch',
    template: '<ng-content></ng-content>',
    host: {
        'class': 'ngx-switch',
        '[class.on]': 'value === on',
        '[class.off]': 'value === off',
        '[class.disabled]': 'disabled',
        '(click)': 'click()'
    },
    providers: [
        NgxEventManager
    ]
})

export class NgxSwitchComponent {

    @Input() value: any = false;
    @Input() disabled: boolean = false;
    @Input() on: any = true;
    @Input() off: any = false;
    @Input() before (next): void {
        next()
    }
    @Input() after (next): void {
        next()
    }
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    constructor (private events: NgxEventManager) {}

    ngOnInit () {
        this.format();
        this.events.use(this.before.bind(this));
        this.events.use(this.change.bind(this));
        this.events.use(this.after.bind(this));
    }

    private format () {
        this.value = this.value === this.on ? this.on : this.off;
        this.valueChange.emit(this.value);
        this.disabled = attributeParse(this.disabled);
    }

    private click () {
        if (this.disabled) return;
        this.events.run();
    }

    private change (next): void {
        this.toggle();
        next();
    }

    private toggle (): void {
        this.value = this.value === this.on ? this.off : this.on;
        this.valueChange.emit(this.value);
    }

}

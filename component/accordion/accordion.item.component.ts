'use strict';

import { Component, TemplateRef, Input, Injectable, ContentChild, OnInit, ViewContainerRef, Inject } from '@angular/core';

import { NgxAccordionComponent } from './accordion.component';

import { NgxAccordionHeaderComponent } from './accordion.header.component';
import { NgxAccordionContentComponent } from './accordion.content.component';

import { attributeParse } from '../util/parse.util';

let id: number = 0;
function getAlias () {
    return `NGXACCORDION${100000 + ++id}`;
}

@Injectable()
@Component({
    selector: 'ngx-accordion-item',
    template: `
        <ng-content select="ngx-accordion-header"></ng-content>
        <ng-content select="ngx-accordion-content" *ngIf="opened"></ng-content>
    `,
    host: {
        'class': `panel panel-default`,
        '[class.disabled]': 'disabled'
    }
})

export class NgxAccordionItemComponent implements OnInit {

    private _disabled: boolean;
    @Input() opened: boolean = false;
    @Input()
    get disabled () {
        return this._disabled;
    }
    set disabled (value) {
        this._disabled = attributeParse(value);
        if (!this._disabled) return;
        this.opened = false;
    }
    @Input() alias: string = getAlias();

    constructor (private parent: NgxAccordionComponent) {}

    ngOnInit () {
        this.parent.add(this);
    }

    ngOnDestroy () {
        this.parent.remove(this);
    }

    toggle (silent?: boolean) {
        this.opened ? this.collapse(silent) : this.expand(silent);
    }

    expand (silent?: boolean) {
        this.switch(true, silent);
    }

    collapse (silent?: boolean) {
        this.switch(false, silent);
    }

    switch (status: boolean, silent?: boolean) {
        if (this.disabled) return;
        if (this.opened === status) return;
        this.opened = status;
        if (silent) return;
        this.parent.change(this);
    }

}

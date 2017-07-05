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
        <ng-content select="ngx-accordion-content" *ngIf="!collapsed"></ng-content>
    `,
    host: {
        'class': `panel panel-default`,
        '[class.disabled]': 'disabled'
    }
})

export class NgxAccordionItemComponent implements OnInit {

    private _disabled: boolean;
    @Input() collapsed: boolean = false;
    @Input()
    get disabled () {
        return this._disabled;
    }
    set disabled (value) {
        this._disabled = attributeParse(value);
        if (!this._disabled) return;
        this.collapsed = false;
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
        this.collapsed ? this.expand(silent) : this.collapse(silent);
    }

    expand (silent?: boolean) {
        this.switch(false, silent);
    }

    collapse (silent?: boolean) {
        this.switch(true, silent);
    }

    switch (status: boolean, silent?: boolean) {
        if (this.disabled) return;
        if (this.collapsed === status) return;
        this.collapsed = status;
        if (silent) return;
        this.parent.change(this);
    }

}

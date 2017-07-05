'use strict';

import {
    Component,
    Input,
    Output,
    Injectable,
    OnInit,
    AfterContentChecked,
    EventEmitter,
    NgModule,
    ContentChild,
    ContentChildren,
    QueryList,
    Host
} from '@angular/core';

import { NgxAccordionItemComponent } from './accordion.item.component';
import { attributeParse } from '../util/parse.util';

@Injectable()
@Component({
    selector: 'ngx-accordion',
    template: '<ng-content></ng-content>',
    host: {
        class: 'panel-group ngx-accordion ngx-accordion-radius'
    }
})

export class NgxAccordionComponent {

    private _multi: boolean;
    private active: NgxAccordionItemComponent;
    private items: NgxAccordionItemComponent[] = [];
    @Input()
    private set multi (value) {
        this._multi = attributeParse(value);
    }

    private get multi () {
        return this._multi;
    }

    private setActive (item) {
        // only for single mode
        if (this.multi) return;
        this.active = item.collapsed ? undefined : item;
    }

    private closeActive () {
        if (!this.active) return;
        this.active.collapse(true);
    }

    change (item) {
        // only for single mode
        if (this.multi) return;
        // if the active item exists, close it
        this.closeActive();
        // change the active item
        this.setActive(item);
    }

    add (item) {
        if (~this.items.indexOf(item)) return;
        this.items.push(item);
        // only for single
        if (this.multi) return;
        // only check not collapsed item
        if (item.collapsed) return;
        if (this.active) {
            item.collapse(true);
        } else {
            this.setActive(item);
        }
    }

    remove (item) {
        let index = this.items.indexOf(item);
        if (!~index) return;
        this.items.splice(index, 1);
    }

    // next () {
    //     let index: number = this.active ? this.items.indexOf(this.active) : this.items.findIndex(item => !item.disabled);
    //     index ++;
    //     if (!this.items[index]) return;
    //     this.items[index].expand();
    // }

    // prev () {
    //     let index: number = this.active ? this.items.indexOf(this.active) : this.items.findIndex(item => !item.disabled);
    //     index --;
    //     if (!this.items[index]) return;
    //     this.items[index].expand();
    // }

}

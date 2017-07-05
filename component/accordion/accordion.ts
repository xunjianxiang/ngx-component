'use strict';
require('./_accordion.scss');
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAccordionComponent } from './accordion.component';
import { NgxAccordionItemComponent } from './accordion.item.component';
import { NgxAccordionHeaderComponent } from './accordion.header.component';
import { NgxAccordionContentComponent } from './accordion.content.component';

const NGX_UI_ACCORDION = [
    NgxAccordionComponent,
    NgxAccordionItemComponent,
    NgxAccordionHeaderComponent,
    NgxAccordionContentComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: NGX_UI_ACCORDION,
    exports: NGX_UI_ACCORDION
})

export class NgxAccordion {}

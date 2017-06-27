'use strict';
require('./_accordion.scss');
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAccordionComponent } from './accordion.component';
import { NgxAccordionItemComponent } from './accordion.item.component';
import { NgxAccordionHeaderComponent } from './accordion.header.component';
import { NgxAccordionContentComponent } from './accordion.content.component';

const NGX_UI_BOOTSTRAP = [
    NgxAccordionComponent,
    NgxAccordionItemComponent,
    NgxAccordionHeaderComponent,
    NgxAccordionContentComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: NGX_UI_BOOTSTRAP,
    exports: NGX_UI_BOOTSTRAP
})

export class NgxAccordion {}

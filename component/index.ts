'use strict';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAlert } from './alert/alert';
export { NgxAlert } from './alert/alert';

import { NgxAccordion } from './accordion/accordion';

const NGX_UI_BOOTSTRAP = [
    NgxAlert,
    NgxAccordion
];

@NgModule({
    imports: NGX_UI_BOOTSTRAP,
    exports: NGX_UI_BOOTSTRAP
})

export class NgxUI {}

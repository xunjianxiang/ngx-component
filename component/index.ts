'use strict';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxAlert } from './alert/alert';
export { NgxAlert } from './alert/alert';

import { NgxAccordion } from './accordion/accordion';
export { NgxAccordion } from './accordion/accordion';

import { NgxSwitch } from './switch/switch';
export { NgxSwitch } from './switch/switch';

const NGX_UI_BOOTSTRAP = [
    NgxAlert,
    NgxAccordion,
    NgxSwitch
];

@NgModule({
    imports: NGX_UI_BOOTSTRAP,
    exports: NGX_UI_BOOTSTRAP
})

export class NgxUI {}

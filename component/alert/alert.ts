'use strict';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAlertComponent } from './alert.component';

const NGX_UI_BOOTSTRAP = [
    NgxAlertComponent
];

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: NGX_UI_BOOTSTRAP,
    exports: NGX_UI_BOOTSTRAP
})
export class NgxAlert {}

'use strict';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAlertComponent } from './alert.component';

const NGX_UI_ALERT = [
    NgxAlertComponent
];

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: NGX_UI_ALERT,
    exports: NGX_UI_ALERT
})
export class NgxAlert {}

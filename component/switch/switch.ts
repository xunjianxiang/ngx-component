'use strict';

require('./_switch.scss');
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSwitchComponent } from './switch.component';

const NGX_UI_SWITCH = [
    NgxSwitchComponent
];

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: NGX_UI_SWITCH,
    exports: NGX_UI_SWITCH
})
export class NgxSwitch {}

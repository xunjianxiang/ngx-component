'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgxUI } from '../component';
import { AppComponent } from './app.component';
import { DemoAlertComponent } from './alert/alert.component';
import { DemoAccordionComponent } from './accordion/accordion.component';
import { DemoSwitchComponent } from './switch/switch.component';

const routes: Routes = [
    { path: '',   redirectTo: '/alert', pathMatch: 'full'},
    { path: 'alert', component: DemoAlertComponent },
    { path: 'accordion', component: DemoAccordionComponent },
    { path: 'switch', component: DemoSwitchComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgxUI,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        DemoAlertComponent,
        DemoAccordionComponent,
        DemoSwitchComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}

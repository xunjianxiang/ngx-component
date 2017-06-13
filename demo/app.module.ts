'use strict';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxUI } from '../component';
import { AppComponent } from './app.component';

const routes: Routes = [

];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgxUI,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}

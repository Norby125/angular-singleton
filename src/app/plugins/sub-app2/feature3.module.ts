import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feature3Component } from './feature3.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            component: Feature3Component,
            pathMatch: 'full'
        }
    ])],
    exports: [],
    declarations: [Feature3Component],
    providers: [],
})
export class Feature3Module {
    constructor() {
        console.log('Feature3Module loaded');
    }
}

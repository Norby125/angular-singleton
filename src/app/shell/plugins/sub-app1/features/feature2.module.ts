import { NgModule } from '@angular/core';

import { Feature2Component } from './feature2.component';
import { ShellModule } from '../../../shell.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            component: Feature2Component,
            pathMatch: 'full'
        }
    ])],
    exports: [],
    declarations: [Feature2Component],
    providers: [],
})
export class Feature2Module { 
    constructor() {
        console.log('Feature2Module loaded');
    }
}

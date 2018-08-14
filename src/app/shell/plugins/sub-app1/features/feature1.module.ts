import { NgModule } from '@angular/core';

import { Feature1Component } from './feature1.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            component: Feature1Component,
            pathMatch: 'full'
        }
    ])],
    exports: [],
    declarations: [Feature1Component],
    providers: [],
})
export class Feature1Module {
    constructor() {
        console.log('Feature1Module loaded');
    }
}

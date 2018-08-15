import { Component, OnInit, Optional } from '@angular/core';
import { CounterService } from '../sub-app1/core/counter.service';

@Component({
    selector: 'feature-3',
    template: `
        <h2>Feature3</h2>
        Instance of counterService (should be undefined) => {{counterService || 'undefined'}}
        `
})

export class Feature3Component implements OnInit {

    constructor(@Optional() public counterService: CounterService) { }

    ngOnInit(): void {
        console.log('Feature3Component initialized');
    }
}

import { Component, OnInit } from '@angular/core';
import { CounterService } from '../core/counter.service';

@Component({
    selector: 'feature-2',
    template: `
        <h2>Feature2</h2>
        <button (click)= increase()>Increase counter F2</button>`
})

export class Feature2Component implements OnInit {
    constructor(private counterService: CounterService) { }

    ngOnInit(): void {
        console.log('Feature2Component initialized');
    }

    increase() {
        this.counterService.increaseCounter();
        console.log(`Feature2Component has increased counter of CounterService: ${this.counterService.getCounter()}`);
    }
}
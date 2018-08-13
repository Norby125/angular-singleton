import { Component, OnInit } from '@angular/core';
import { CounterService } from '../core/counter.service';

@Component({
    selector: 'feature-1',
    template: `
        <h1>Feature1</h1>
        <button (click)=increase()>Increase counter F1</button>`
})

export class Feature1Component implements OnInit {

    constructor(private counterService: CounterService) { }

    ngOnInit(): void {
        console.log('Feature1Component initialized');
    }

    increase() {
        this.counterService.increaseCounter();
        console.log(`Feature1Component has increased counter of CounterService: ${this.counterService.getCounter()}`);
    }
}
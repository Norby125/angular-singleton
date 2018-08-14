import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';

@Injectable(
  {providedIn: CoreModule}
)
export class CounterService {
  private counter = 0;
  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  increaseCounter() {
      return this.counter++;
  }
}

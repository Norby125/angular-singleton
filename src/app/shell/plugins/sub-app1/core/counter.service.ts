import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counter: number = 0;
  constructor() { }

  getCounter(): number {
    return this.counter;
  }

  increaseCounter(){
      return this.counter++;
  }
}
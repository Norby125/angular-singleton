import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldLoggerService {

    say () {
        console.log('Hello world from shell');
    }
}
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HelloWorldLoggerService } from '../../common/helloWorldLogger.service';

@NgModule({
    imports: [CoreModule.forRoot()],
    exports: [],
    declarations: [],
    providers: [],
})
export class SubApp1Module {
    constructor(helloWorldLoggerService: HelloWorldLoggerService) {
        helloWorldLoggerService.say();
        console.log('SubApp1Module loaded');
    }
}

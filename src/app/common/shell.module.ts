import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HelloWorldLoggerService } from './helloWorldLogger.service';
import { SubApp1Module } from '../plugins/sub-app1/sub-app1.module';

@NgModule({
  imports: [],
  declarations: [],
  bootstrap: []
})
export class ShellModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShellModule,
      providers: [HelloWorldLoggerService]
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: ShellModule) {
    if (parentModule) {
      throw new Error(
        'ShellModule is already loaded. Import it in the AppModule only');
    }
  }


}

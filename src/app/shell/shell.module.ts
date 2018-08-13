import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HelloWorldLoggerService } from "./helloWorldLogger.service";

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

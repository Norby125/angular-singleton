import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CounterService } from './counter.service';

@NgModule({
  imports: [],
  declarations: [],
  bootstrap: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the SubApp1Module only');
    }
  }
}

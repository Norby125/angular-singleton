import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellModule } from './common/shell.module';
import { RouterModule } from '@angular/router';
import { AppModuleRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { SubApp1Module } from './plugins/sub-app1/sub-app1.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ShellModule.forRoot(),
    RouterModule.forRoot(AppModuleRoutes),
    SubApp1Module
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

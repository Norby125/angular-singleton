import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>App started</h1>

  <button routerLink="/feature1">Feature1</button>
  <button routerLink="/feature2">Feature2</button>

  <router-outlet></router-outlet>`,
})
export class AppComponent {

}

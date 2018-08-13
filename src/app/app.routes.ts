import { Routes } from '@angular/router';

export const AppModuleRoutes: Routes = [
  {
    path: 'feature1',
    loadChildren: 'app/shell/plugins/sub-app1/features/feature1.module#Feature1Module'
  },
  {
    path: 'feature2',
    loadChildren: 'app/shell/plugins/sub-app1/features/feature2.module#Feature2Module'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

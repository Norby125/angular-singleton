import { Routes } from '@angular/router';

export const AppModuleRoutes: Routes = [
  {
    path: 'feature1',
    loadChildren: 'app/plugins/sub-app1/features/feature1.module#Feature1Module'
  },
  {
    path: 'feature2',
    loadChildren: 'app/plugins/sub-app1/features/feature2.module#Feature2Module'
  },
  {
    path: 'feature3',
    loadChildren: 'app/plugins/sub-app2/feature3.module#Feature3Module'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

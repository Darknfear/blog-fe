import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('../../../features/auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: 'feature',
    loadChildren: () =>
      import('../../../features/feature/feature.module').then((m) => m.FeatureModule),
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('../../../features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('../../../features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('../../../features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('../../../features/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}

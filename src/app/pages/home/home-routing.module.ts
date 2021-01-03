import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../../pages/auth/auth.guard';
import { MainPage } from './main/main.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    // canActivate: [ AuthGuard ],
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule),
  },
  {
    path: 'preferences',
    loadChildren: () => import('./preferences/preferences.module').then( m => m.PreferencesPageModule),
  },
  {
    path: 'schedule',
    loadChildren: () => import('../schedule/schedule.module').then( m => m.SchedulePageModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

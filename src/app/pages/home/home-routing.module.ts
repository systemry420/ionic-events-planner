import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../../pages/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: 'preferences',
    loadChildren: () => import('./preferences/preferences.module').then( m => m.PreferencesPageModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: 'schedule',
    loadChildren: () => import('../schedule/schedule.module').then( m => m.SchedulePageModule),
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

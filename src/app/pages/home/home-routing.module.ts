import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    // component: HomePage,
    pathMatch: "full",
    // canActivate: [ AuthGuard ],
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),
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
    path: 'people',
    loadChildren: () => import('./people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'add-event',
    loadChildren: () => import('./add-event/add-event.module').then( m => m.AddEventPageModule)
  },
  {
    path: 'myevents',
    loadChildren: () => import('./myevents/myevents.module').then( m => m.MyeventsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

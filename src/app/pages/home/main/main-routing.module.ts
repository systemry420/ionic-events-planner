import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplePage } from '../people/people.page';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'main',
        component: MainPage
      },
      {
        path: 'people',
        component: PeoplePage
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

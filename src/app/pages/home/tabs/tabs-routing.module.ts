import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
  },
  {
    path: '',
    loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
  },
  {
    path: '',
    loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

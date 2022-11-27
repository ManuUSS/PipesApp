import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortedComponent } from './sales/pages/sorted/sorted.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BasicsComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'sorted',
    component: SortedComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRouterModule { }

import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card';


@NgModule({
  exports: [
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

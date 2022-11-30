import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

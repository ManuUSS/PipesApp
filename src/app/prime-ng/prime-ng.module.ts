import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

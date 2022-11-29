import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  public nameLower: string = 'manuel';
  public nameUpper: string = 'MANUEL';
  public nameComplete: string = 'ManuEl UlAte';

}

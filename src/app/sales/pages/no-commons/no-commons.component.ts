import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {

  public name: string = 'Manuel';
  public gender: string = 'Femenino';
  public invitationMap = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  };

}

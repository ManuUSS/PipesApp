import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html'
})
export class SortedComponent implements OnInit {

  public onUpperCase : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public changeCase = ():void => {
    this.onUpperCase = !this.onUpperCase;
  }

}

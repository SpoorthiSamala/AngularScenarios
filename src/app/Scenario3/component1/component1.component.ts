import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component3Component implements OnInit {
  public name="";
  constructor() { }

  ngOnInit() {
  }

}

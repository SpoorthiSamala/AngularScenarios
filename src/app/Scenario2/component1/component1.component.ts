import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component2Component implements OnInit {
  title="Scenario-2"
  public name="";
  constructor() { }

  ngOnInit() {
  }

}

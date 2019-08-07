import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component4Component implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}

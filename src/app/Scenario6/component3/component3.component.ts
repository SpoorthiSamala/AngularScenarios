import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-component12',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component12Component implements OnInit {

  @Input('data') public name: string;

  constructor() { }

  ngOnInit() {
  }

}

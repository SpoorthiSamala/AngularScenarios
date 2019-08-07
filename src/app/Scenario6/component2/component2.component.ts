import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-component11',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component11Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  public name="";
  constructor() { }

  ngOnInit() {
  }
  
  fireEvent(){
    this.childEvent.emit(this.name);
  }

}

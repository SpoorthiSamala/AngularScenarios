import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component6Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  public name="";
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit(this.name);
  }

}

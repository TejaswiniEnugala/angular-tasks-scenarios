import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  public name="";
  myfunctions()
  {
  this.childEvent.emit(this.name);
  }
  constructor() { }

  ngOnInit() {
  }

}

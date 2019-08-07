import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component11',
  templateUrl: './component11.component.html',
  styleUrls: ['./component11.component.css']
})
export class Component11Component implements OnInit {
@Output() public childEvent=new EventEmitter();
public name="";
myfunction()
{
  this.childEvent.emit(this.name);
}
  constructor() { }

  ngOnInit() {
  }
fireEvent()
{
  this.childEvent.emit(this.name);
}
}

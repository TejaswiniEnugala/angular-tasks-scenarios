import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
myfunction(value)
{
  
  this.childEvent.emit(value);
}
}

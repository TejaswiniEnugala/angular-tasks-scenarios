import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {
public message="";
@Output() public childEvent1=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}

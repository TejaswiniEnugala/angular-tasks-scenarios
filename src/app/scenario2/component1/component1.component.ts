import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component2Component implements OnInit {
  public name="";
  constructor() { }

  ngOnInit() {
  }

}

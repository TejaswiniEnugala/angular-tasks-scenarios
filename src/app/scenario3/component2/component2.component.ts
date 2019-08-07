import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component3Component implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }


}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component10',
  templateUrl: './component10.component.html',
  styleUrls: ['./component10.component.css']
})
export class Component10Component implements OnInit {
@Input('data') public name:string;
  constructor() { }

  ngOnInit() {
  }

}

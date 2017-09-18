import { Component, OnInit } from '@angular/core';
var $ = require('jquery');
declare var jsPlumb: any;

@Component({
  selector: 'logic-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit { 
  gateCategories: Array<Object>;
  base: String;

  constructor() {
    this.base = '/src/assets/images/';
    this.gateCategories = [
      {
        id: 0,
        name: 'NOT',
        image: this.base + 'NOT.png',
        numberIN: 1,
        numberOUT: 1
      },{
        id: 1,
        name: 'AND',
        image: this.base + 'AND.png',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 2,
        name: 'NAND',
        image: this.base + 'NAND.png',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 3,
        name: 'OR',
        image: this.base + 'OR.png',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 4,
        name: 'NOR',
        image: this.base + 'NOR.png',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 5,
        name: 'XOR',
        image: this.base + 'XOR.png',
        numberIN: 2,
        numberOUT: 1
      }
    ]
  }

  ngOnInit(): void {
    jsPlumb.ready(function() {
      jsPlumb.draggable("1", { grid:[10,10] });     
    }); 
  }

}
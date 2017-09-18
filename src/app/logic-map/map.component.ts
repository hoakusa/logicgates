import { Component } from '@angular/core';

@Component({
  selector: 'logic-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent { 
  gateCategories: Array<Object>;

  constructor() {
    this.gateCategories = [
      {
        id: 0,
        name: 'NOT',
        image: 'images/NOT.png',
        numberIN: 1,
        numberOUT: 1
      },{
        id: 1,
        name: 'AND',
        image: '',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 2,
        name: 'NAND',
        image: '',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 3,
        name: 'OR',
        image: '',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 4,
        name: 'NOR',
        image: '',
        numberIN: 2,
        numberOUT: 1
      },{
        id: 5,
        name: 'XOR',
        image: '',
        numberIN: 2,
        numberOUT: 1
      }
    ]
  }
}
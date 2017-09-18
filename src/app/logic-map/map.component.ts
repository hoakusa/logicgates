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
      jsPlumb.setContainer('diagramContainer'); 

      // Connection
      var input = {
        isSource: false,
        isTarget: true,
        connector: ['Bezier'],
        endpoint: 'Dot',
        paintStyle:{ fill: '#16a085' },
        hoverPaintStyle:{ fill: '#2ecc71' },
        connectorStyle:{ stroke: '#34495e', strokeWidth: 5 },
        connectorHoverStyle:{ stroke: '#2ecc71', strokeWidth: 5 }
      };

      var output = {
        isSource: true,
        isTarget: false,
        connector: ['Straight'],
        endpoint: 'Dot',
        paintStyle:{ stroke: '#16a085', strokeWidth: 3 },
        hoverPaintStyle:{ fill: '#2ecc71' },
        connectorStyle:{ stroke: '#34495e', strokeWidth: 5 },
        connectorHoverStyle:{ stroke: '#2ecc71', strokeWidth: 5 }
      };

      jsPlumb.addEndpoint('0', { 
        anchors: [0, 0.66, 1, 0] // LeftIn
      }, input);

      jsPlumb.addEndpoint('0', { 
        anchors: [0, 0.33, 1, 0] // LeftIn
      }, input);

      jsPlumb.addEndpoint('0', { 
        anchors: [1, 0.5, 1, 0] // RightOut
      }, output);

      jsPlumb.draggable('0', { grid:[5,5] });

      jsPlumb.addEndpoint('1', { 
        anchors: [0, 0.66, 1, 0] // LeftIn
      }, input);

      jsPlumb.addEndpoint('1', { 
        anchors: [0, 0.33, 1, 0] // LeftIn
      }, input);

      jsPlumb.addEndpoint('1', { 
        anchors: [1, 0.5, 1, 0] // RightOut
      }, output);

      jsPlumb.draggable('1', { grid: [5,5] });
    }); 
  }

}
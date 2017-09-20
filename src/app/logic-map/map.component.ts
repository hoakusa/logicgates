import { Component, OnInit, Input, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
var $ = require('jquery');
declare var jsPlumb: any;

interface IGateCategory {
  id: number,
  name: String,
  image: String,
  numberIN: number,
  numberOUT: number
}

interface IGate {
  id: number,
  type: String
}

@Component({
  selector: 'logic-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MapComponent implements OnInit { 
  gateCategories: IGateCategory[];
  base          : String;
  gates         : IGate[];
  autoinc       : number;

  @ViewChildren('logicgates') listgates: QueryList<any>;

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
    ];

    // var autoinc is a represent for auto increment gate_id, unique, auto increment by 1
    // At initial state, there are two gates already: Input and Output -> set autoinc = 2
    this.autoinc = 2;

    this.gates = [
      {
        id: 0,
        type: "AND"
      },{
        id: 1,
        type: "OR"
      }
    ];
  }

  ngOnInit() {
    jsPlumb.ready(function() {
      jsPlumb.setContainer('diagramContainer');
      styleGate(0, 'AND');
      styleGate(1, 'OR');
    });
  }

  // Callback function after ngFor rendered already
  ngAfterViewInit() {
    this.listgates.changes.subscribe(t => {
      this.ngForRendred();
    })
  }
  
  // Make sure calling styleGate function when ngFor finished redering HTML
  ngForRendred() {
    if (this.gates.length > 0) {
      styleGate(this.gates[this.gates.length - 1].id, this.gates[this.gates.length - 1].type);
      this.autoinc++;
    } 
  }

  allowDrop(widget: any, event: any) {
    event.preventDefault();
  }

  drag(widget: any, event: any) {
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(widget: any, event: any) {
    event.preventDefault();
    
    // Get type of gate
    // data : "AND", "OR", "NOR", "XOR", "NOT"
    var data = event.dataTransfer.getData("text");
    console.log(data); 
    
    // var str = '<div class="item" id="' + this.autoinc + '">'
    //         + '<span class="delete-button" onClick="delete(' + this.autoinc + ')">X</span>'
    //         + '<img src="' + this.base + data + '.png"/></div>';
    // var appendGate = document.createElement('div');
    // appendGate.innerHTML = str;    
    // console.log(appendGate);
    // event.target.appendChild(appendGate);
    // var target = document.getElementById('diagramContainer');
    // target.insertAdjacentHTML('beforeend', str);
    this.update(data);
  }

  delete(getId: number) {
    console.log('delete ' + getId);
    var index = this.gates.findIndex(gate => gate.id === getId);
    this.gates.splice(index, 1);
    jsPlumb.remove(getId.toString());
  }

  update(data: String) {
    // Add new gate with auto increment id
    this.gates.push({
      id: this.autoinc,
      type: data
    });
  }
}

function styleGate(id: number, type: String) {
    var target = id.toString();
    console.log('style ' + target);

    // Draw Connection
    var input = {
      isSource: false,
      isTarget: true,
      connector: ['Straight'],
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
    
    // NOT gate has only 1 left input
    if (type === "NOT") {
      // Left Anchor: y = 0.5
      jsPlumb.addEndpoint(target, { 
        anchors: [0, 0.5, 1, 0]
      }, input);

    // Other gates has 2 left inputs
    } else {
      // Top left Anchor: y = 0.66
      jsPlumb.addEndpoint(target, { 
        anchors: [0, 0.66, 1, 0]
      }, input);
      // Top left Anchor: y = 0.33
      jsPlumb.addEndpoint(target, { 
        anchors: [0, 0.33, 1, 0]
      }, input);
    }

    // Every gate has only 1 right output
    jsPlumb.addEndpoint(target, { 
      anchors: [1, 0.5, 1, 0]
    }, output);

    jsPlumb.draggable(target, { 
      grid:[5,5],
      containment:true
    });
    
  }
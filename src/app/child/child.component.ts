import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() nums:number[]; // receiver get data from parent 
  @Output() message = new EventEmitter(); // subcriber

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){ // this is my event handler
    this.message.emit(this.nums.filter(i=>i %2!=0)); // send data to parent 
  }
}

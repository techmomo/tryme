import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg:number[]
  constructor() { }

  ngOnInit(): void {
    this.msg = [1,2,3,4,5,6,7,8,9,10];
  }
  onMessage(event){
    // receive message sent from child component
    this.msg = event;
  }
}

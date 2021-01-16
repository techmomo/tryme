import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  isLogged:boolean
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogged')){
      const loggedIn:boolean =   new Boolean(localStorage.getItem('isLogged')).valueOf();
      this.isLogged = loggedIn;
    }
  }
}

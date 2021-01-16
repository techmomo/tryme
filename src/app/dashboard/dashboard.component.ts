import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLogged:boolean
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogged')){
      const loggedIn:boolean =   new Boolean(localStorage.getItem('isLogged')).valueOf();
      this.isLogged = loggedIn;
    }else{
      this.router.navigate(['home']);
    }
  }
}

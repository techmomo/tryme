import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  getUserDetails(_id){
    this.router.navigate(['users/details'],{queryParams: { id: _id}});
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user:any
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    //const uId = this.route.snapshot.params.id; // get params from url
    const uId:number = parseInt(this.route.snapshot.paramMap.get('id')); // using map with key
    console.log(`User ID is ${uId}`);
    this.user = this.userService.getUserDetailsById(uId);

  }
}

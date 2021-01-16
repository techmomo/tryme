import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[]
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'MOHSIN',
        email: 'ee@gg.com'
      },
      {
        id: 2,
        name: 'JOHN',
        email: 'john@gg.com'
      },
      {
        id: 3,
        name: 'TOM',
        email: 'tom@gg.com'
      }
    ]
   }
  getUsers(){
    return this.users;    
  }
  getUserDetailsById(id:number){
    return this.users.find(u=> u.id == id);
  }
}

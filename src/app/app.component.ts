import { Component } from '@angular/core';
import { RxjsService } from './rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  
  constructor(private rxjsService:RxjsService){
    //
  }
}

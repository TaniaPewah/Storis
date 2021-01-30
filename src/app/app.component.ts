import { Component } from '@angular/core';

// metadata for the component
@Component({
  selector: 'app-root', // selector for the html element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-todolist Taniup';

  constructor(){
    this.title= 'wat wat';
  }
}

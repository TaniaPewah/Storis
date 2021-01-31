import { Component } from '@angular/core';

// metadata for the component
@Component({
  selector: 'app-root', // selector for the html element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular Stories Taniup';
  public showBrowse:boolean = true;
  public showCreateStory:boolean = false;

  constructor(){
    this.title= 'wat wat';
  }

  createStoryTellBrowser(){
    console.log("app-root i heard");
    this.showBrowse = false;
    this.showCreateStory = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public showBrowse:boolean = true;
  public showCreateStory:boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  createStoryTellBrowser(){
    console.log("app-root i heard");
    this.showBrowse = false;
    this.showCreateStory = true;
  }

}


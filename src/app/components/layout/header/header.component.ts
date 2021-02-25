import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Output() createStoryPass: EventEmitter<any> = new EventEmitter();

  constructor() {
    debugger;
   }

  ngOnInit(): void {
  }

  createStory(){
    console.log("app-header i heard create");
    this.createStoryPass.emit();
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() createStoryPass: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createStory(){
    console.log("app-header i heard create");
    this.createStoryPass.emit();
  }
}

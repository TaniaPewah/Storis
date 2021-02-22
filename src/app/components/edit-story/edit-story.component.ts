import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  @Output() cancelCreateStory: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.cancelCreateStory.emit();
  }
}

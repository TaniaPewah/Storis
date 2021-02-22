import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  @Output() cancelCreateStory: EventEmitter<any> = new EventEmitter();

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.cancelCreateStory.emit();
  }

  onSubmit( story:Story ){
    
     this.storyService.createStory(story)
         .then(res => {
           console.log("created story");
             /*do something here....
             maybe clear the form or give a success message*/
         });
  
  }
}

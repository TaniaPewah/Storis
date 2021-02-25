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

  story: Story = new Story();
  submitted = false;

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {
    
  }

  onCancelCreate(){
    console.log("cancel create story");
    this.cancelCreateStory.emit();
  }

  onSubmit(){
    debugger;
    this.storyService.createStory(this.story).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newStory(): void {
    this.submitted = false;
    this.story = new Story();
  }
}

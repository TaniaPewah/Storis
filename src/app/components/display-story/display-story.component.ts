import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from 'src/app/models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-display-story-item',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent implements OnInit {
  @Input() story: Story;
  @Output() chooseStoryOption: EventEmitter<any> = new EventEmitter();
  currentStory: Story = null;

  constructor( private storyService:StoryService ) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currentStory = { ...this.story };
  }

  makeChoice(target): void{
    this.chooseStoryOption.emit();
  }

  // deleteStory(): void {
  //   this.storyService.deleteStory(this.currentStory.id)
  //     .then(() => {
  //       this.refreshList.emit();
  //       console.log('The story was deleted successfully');
  //     })
  //     .catch(err => console.log(err));
  // }

}

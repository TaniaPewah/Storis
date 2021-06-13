import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-display-story-item',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent implements OnInit {
  @Input() story: Story;

  currentStory: Story = null;
  editing: boolean = false;
  imageToUpload: File = null;
  chosenChoice: string;

  constructor( private storyService:StoryService ) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currentStory = { ...this.story };
  }

  makeChoice(target): void{
    this.chosenChoice = target.innerText;

    // if chosen option has content:
    //   display the content on the same component
    // else open edit mode on the same component
    if( this.story.choice_one.text ){
      this.displayNextOutcome();
    } else {
      this.openEditChoiceMode();
    }
  }

  displayNextOutcome(){

    console.log("there is a story submitted for this choice");
    // TODO: sliding effect of the prev story, 
    // display the chosen choice.content on the same component
  }

  openEditChoiceMode(){

    this.editing = true;
    console.log("opening edit choice mode");
    // TODO: sliding effect of the prev story, title becomes the chosen choice text
  }
}

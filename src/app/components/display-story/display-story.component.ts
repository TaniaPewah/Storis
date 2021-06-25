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
    let chosenChoice = target.className;
    let choiceID = this.story[chosenChoice].id;
    this.storyService.getStoryByID(choiceID);
    debugger;

    // if chosen option has content:
    //   display the content on the same component
    // else open edit mode on the same component
    
  }

  // openEditChoiceMode(){

  //   this.editing = true;
  //   console.log("opening edit choice mode");
  //   // TODO: sliding effect of the prev story, title becomes the chosen choice text
  // }


  // What i did and what to do
  /* created two empty stories as the choices, with their id in the parent.
  when one of the choice buttons is pressed -the id is knwn and getStory is called with this id
   if the recieved story doesnot have content tex - edit this story, 
   else the story is displayed.
  
  
  */
}

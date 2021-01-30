import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-browse-stories',
  templateUrl: './browse-stories.component.html',
  styleUrls: ['./browse-stories.component.css']
})
export class BrowseStoriesComponent implements OnInit {
  stories: Story[];

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {
    this.stories = this.storyService.getStories();
  }
}

import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-browse-stories',
  templateUrl: './browse-stories.component.html',
  styleUrls: ['./browse-stories.component.css']
})
export class BrowseStoriesComponent implements OnInit {
  stories: Story[];

  constructor(private storyService:StoryService ) { }

  ngOnInit(): void {
    this.retrieveStories();
  }

  retrieveStories(){

    this.storyService.getStories().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.stories = data;
    });
  }

}

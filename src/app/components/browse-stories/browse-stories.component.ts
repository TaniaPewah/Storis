import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';

@Component({
  selector: 'app-browse-stories',
  templateUrl: './browse-stories.component.html',
  styleUrls: ['./browse-stories.component.css']
})
export class BrowseStoriesComponent implements OnInit {
  stories: Story[];

  constructor() { }

  ngOnInit(): void {
  }

}

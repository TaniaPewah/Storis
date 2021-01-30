import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/models/Story';

@Component({
  selector: 'app-display-story-item',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent implements OnInit {
  @Input() story: Story;

  constructor() { }

  ngOnInit(): void {
  }

}

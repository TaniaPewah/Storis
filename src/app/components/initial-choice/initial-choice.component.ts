import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-choice',
  templateUrl: './initial-choice.component.html',
  styleUrls: ['./initial-choice.component.css']
})
export class InitialChoiceComponent implements OnInit {

  showChoices: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openCoices(): void{
    this.showChoices = true;
  }
}

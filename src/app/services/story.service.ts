import { Injectable } from '@angular/core';
import { Story } from '../models/Story';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  // returns observable
   getStories(){
    return [
      {
      id: 2,
      title:'third',
      text:'asat was canceled because it is a horrible organization almos like technion international',
      author:'Leupimas',
      imgSrc:'hh',
      choices: [3,4],
      father: 1,
      date: new Date(),
      pulse: 100,
      state: 'edit',
  
    },{
      id: 5,
      title:'second',
      text:'Leupimas has premium account because he is the best',
      author:'Taniup',
      imgSrc:'htfh',
      choices: [3,4],
      father: 6,
      date: new Date(),
      pulse: 100,
      state: 'edit'
    },
    {
      id: 1,
      title:'first',
      text:'division by zero is infinity',
      author:'Taniup',
      imgSrc:'htfh',
      choices: [3,4],
      father: 7,
      date: new Date(),
      pulse: 100,
      state: 'edit'
    }];
   }
}

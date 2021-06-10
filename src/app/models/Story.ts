import { Optional } from '@angular/core'; 

export class Story{
    id: string;
    author: string;
    title: string;
    text: string;
    image: string;
    choice_one: any;
    choice_two: any;
    father: number;
    date: Date;
    pulse: number;
    state: string;
    imageURL: string;
}
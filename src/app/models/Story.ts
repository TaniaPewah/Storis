import { Optional } from '@angular/core'; 

export class Story{
    id: string;
    author: string;
    title: string;
    text: string;
    image: string;
    choice_one: Story;
    choice_two: Story;
    parent: string;
    date: Date;
    pulse: number;
    state: string;
    imageURL: string;
}
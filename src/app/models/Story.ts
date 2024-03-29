import { Optional } from '@angular/core'; 

export class Story{
    id: string;
    author: string;
    title: string;
    text: string;
    image: string;
    choice_one: { text: string,
                    id: string};
    choice_two: { text: string,
                    id: string};
    parent: string;
    date: Date;
    pulse: number;
    state: string;
    imageURL: string;
}
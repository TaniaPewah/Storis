export class Story{
    id: string;
    author: string;
    title: string;
    text: string;
    image: string;
    choices: Array<string>;
    father: number;
    date: Date;
    pulse: number;
    state: string;
}
export class Story{
    id: number;
    author: number;
    title: string;
    text: string;
    imgSrc: string;
    choices: Array<number>;
    father: number;
    date: Date;
    pulse: number;
    state: string;
}
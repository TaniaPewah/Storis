export class Story{
    id: number;
    author: string;
    title: string;
    text: string;
    imgSrc: string;
    choices: Array<number>;
    father: number;
    date: Date;
    pulse: number;
    state: string;
}
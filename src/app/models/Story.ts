export class Story{
    id: number;
    author: string;
    title: string;
    text: string;
    image: string;
    choices: Array<number>;
    father: number;
    date: Date;
    pulse: number;
    state: string;
}
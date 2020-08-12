import {QuestionGroup} from './question-group.model';

export class Calculator{
    name: string;
    description: string;
    calcFunction: string;
    questionGroups: QuestionGroup[];
    id: string;
    validated: boolean;
    resultsMarkup: string;

    constructor(input: any) {
        this.questionGroups = [];
        this.name = input.name;
        this.description = input.description;
        this.calcFunction = input.calcFunction;
        this.id = input.id;
        this.resultsMarkup = input.resultsMarkup;
        if (input.questionGroups) {
            for (let i = 0; i < input.questionGroups.length; i++){
                const q = input.questionGroups[i];
                q.id = q.id ? q.id : this.id + '-qg' + i;
                this.questionGroups.push(new QuestionGroup(q));
            }
        }
    }

    validate(): boolean {
        return !this.questionGroups.some(_ => !_.validate());
    }
}

export class CalculatorResults {
    markup: string;
    results: number[];
}

export class QuestionModel {
    questionId: number;
    questionText: string;
    options: Option[];
}

export class Option{
  optionId: number;
  optionText: string;
  currect: boolean;
}

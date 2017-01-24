export class QuestionModel {
    questionId: number = 0;
    questionText: string = "";
    answerText: string = "";
    options: Option[] = [
      {"optionId":1,"optionText":"", "correct":false},
      {"optionId":2,"optionText":"", "correct":false},
      {"optionId":3,"optionText":"", "correct":false},
      {"optionId":4,"optionText":"", "correct":false}
    ];
}

export class Option{
  optionId: number;
  optionText: string;
  correct: boolean;
}

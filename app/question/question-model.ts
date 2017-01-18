export class QuestionModel {
    questionId: number;
    questionText: string;
    answerText: string = "Put explanation of Correct answer here .. ";
    options: Option[] = [
      {"optionId":1,"optionText":"Option 01","currect":false},
      {"optionId":2,"optionText":"Option 02","currect":false},
      {"optionId":3,"optionText":"Option 03","currect":true},
      {"optionId":4,"optionText":"Option 04","currect":false}
    ];
}

export class Option{
  optionId: number;
  optionText: string;
  currect: boolean;
}

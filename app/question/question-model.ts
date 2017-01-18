export class QuestionModel {
    questionId: number;
    questionText: string = "Question text here ...";
    answerText: string = "Explanation of answer here .. ";
    options: Option[] = [
      {"optionId":1,"optionText":"Option 01", "correct":false},
      {"optionId":2,"optionText":"Option 02", "correct":false},
      {"optionId":3,"optionText":"Option 03", "correct":false},
      {"optionId":4,"optionText":"Option 04", "correct":false}
    ];
}

export class Option{
  optionId: number;
  optionText: string;
  correct: boolean;
}

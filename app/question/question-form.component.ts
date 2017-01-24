import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { QuestionManageService } from './question-manage.service';
import { QuestionModel } from './question-model';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent{

  formTitle: string = "Question Add Form";
  submitMsg: string = "";
  question: QuestionModel = new QuestionModel();

  constructor(private questionManageService: QuestionManageService){
  }

  onChange(idx:number){
    console.log("selection changed to > "+idx);
    for(let opt of this.question.options){
      console.log(opt.correct);
      if(opt.optionId == idx){
        opt.correct = true;
      }else{
        opt.correct = false;
      }
    }
  }

  /*Call this method when user Submits to Add a Question*/
  submitQuestion(){
    console.log(`submitQuestion() : Qid = ${this.question.questionId}`);
    if(this.question.questionId > 0){
      this.questionManageService
          .updateQuestion(this.question)
          .subscribe(
            (r: Response) => {
              this.question = r.json();
              console.log(`QID : ${this.question.questionId}`);
              this.submitMsg = "Question Updated.";
            }
          );
    }else{
      this.questionManageService
          .addQuestion(this.question)
          .subscribe(
            (r: Response) => {
              console.log(r.json());
              /*collect questionId from response.
              based on this add / update method can be called from UI*/
              this.question = r.json();
              console.log(`QID : ${this.question.questionId}`);
              this.submitMsg = "Question Added.";
            }
          );
    }
  }
}

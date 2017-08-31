import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { QuestionManageService } from './question-manage.service';
import { QuestionModel } from './question-model';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent implements OnInit, OnDestroy{

  formTitle: string = "Question Add Form";
  submitMsg: string = "";
  question: QuestionModel = new QuestionModel();
  subscription: any;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
              private questionManageService: QuestionManageService,
              private router: Router,
              private route: ActivatedRoute){}

ngOnInit(){
    this.subscription = this.route.params.subscribe(params => {
    let id = Number.parseInt(params['id']);
    /* check param to be a valid number before calling getQuestion */
    console.log("QuestionFormComponent.ngOnItnit() QID :"+id);
    this.questionManageService
      .getQuestion(id)
      .subscribe(
          res => this.question = res,
          err => this.errorMessage = err,
          ()  => this.isLoading = false);
  });
}

ngOnDestroy(){

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

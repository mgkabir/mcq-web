import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  moduleId: module.id,
  selector: 'question-details',
  templateUrl: './question-details.component.html'
})
export class QuestionDetailsComponent implements OnInit, OnDestroy {
    question: Question;
    sub: any;
    respJSON : Response;
    answerSubmitted: boolean = false;

    constructor(private questionService: QuestionService,
                private route: ActivatedRoute,
                private router: Router){
    }

    nextQuestion(){
      this.answerSubmitted = false;
      this.questionService
      .get(this.question.nextQuestionId)
      .subscribe(q => this.question = q);
    }

    submitAnswer(){
      this.questionService
          .submitAnswer(this.question)
          .subscribe(
            (r: Response) => {
              this.question.isAnswerCorrect = r.json().correct;
              this.question.nextQuestionId = r.json().nextQuestion.questionId;
            }
          );
          this.answerSubmitted = true;
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.questionService
            .get(id)
            .subscribe(q => this.question = q);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
/*
    get diagnostic(){
      return JSON.stringify(this.resp);
    }
    */
}

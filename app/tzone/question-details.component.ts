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
    answerSubmitted: boolean = false;
    noCorrect: number = 0;
    noWrong: number = 0;

    constructor(private questionService: QuestionService,
                private route: ActivatedRoute,
                private router: Router){
    }

    nextQuestion(){
      this.answerSubmitted = false;
      this.questionService
        .getRandomQuestion()
        .subscribe(q => this.question = q);
    }

    submitAnswer(){
      this.questionService
          .submitAnswer(this.question)
          .subscribe(
            (r: Response) => {
              this.question.isAnswerCorrect = r.json().correct;
              if(this.question.isAnswerCorrect){
                  this.noCorrect++;
              }else{
                  this.noWrong++;
              }
            }
          );
          this.answerSubmitted = true;
    }

    ngOnInit(){
          this.questionService
            .getRandomQuestion()
            .subscribe(q => this.question = q);
    }

    ngOnDestroy(){
      /* Not necessary to unsubscribe but a good practice.
      When subscribing to an observable in a component, you almost always arrange to unsubscribe
      when the component is destroyed. The ActivatedRoute observables are among the exceptions. */
    }
/*
    get diagnostic(){
      return JSON.stringify(this.resp);
    }
    */
}

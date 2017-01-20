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
      this.router.navigate(['/practice',this.question.nextQuestionId]);
    }

    submitAnswer(){
      this.questionService
          .submitAnswer(this.question)
          .subscribe(
            (r: Response) => {
              this.question.isAnswerCorrect = r.json().correct;
              this.question.nextQuestionId = r.json().nextQuestionId;
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
      /* Not necessary to unsubscribe but a good practice.
      When subscribing to an observable in a component, you almost always arrange to unsubscribe 
      when the component is destroyed. The ActivatedRoute observables are among the exceptions. */
        this.sub.unsubscribe();
    }
/*
    get diagnostic(){
      return JSON.stringify(this.resp);
    }
    */
}

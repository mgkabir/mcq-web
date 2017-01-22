import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { QuestionManageService } from './question-manage.service';
import { QuestionModel } from './question-model';

@Component({
  moduleId: module.id,
  selector: 'question-list',
  template:
  `
    <div class="well">
        <section *ngIf="isLoading && !errorMessage">
        Retrieving Question data...
        </section>
          <ul>
            <li class="list-unstyled" *ngFor="let q of questions">
                {{q.questionId}}.
                <a href="#" [routerLink]="['/questions', q.questionId]">
                  {{q.questionText}}
                </a>
            </li>
          </ul>
          <section *ngIf="errorMessage">
            {{errorMessage}}
          </section>
    </div>
    <!--p class="text-info"> TODO : Remove diagnostic : {{diagnostic}} </p-->
  `
})

export class QuestionListComponent implements OnInit, OnDestroy{

  questions: QuestionModel[];
  errorMessage: string = '';
  isLoading: boolean = true;
  sub:any;

  constructor(
    private router: Router,
    private service: QuestionManageService
  ) {}

  ngOnInit(){
    console.log("ngOnItnit() called");
    this.sub = this.service.getQuestions()
      .subscribe(
          res => this.questions = res,
          err => this.errorMessage = err,
          ()  => this.isLoading = false
        );
  }

  ngOnDestroy(){
    /* When subscribing to an observable in a component, you almost always arrange to unsubscribe
    when the component is destroyed. */
    this.sub.unsubscribe();
  }

  get diagnostic(){
    return JSON.stringify(this.questions);
  }

}

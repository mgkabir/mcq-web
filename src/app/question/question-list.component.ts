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
    <div class="text-center">
      <section *ngIf="isLoading && !errorMessage">
        Retrieving Question data...
      </section>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-condensed table-bordered">
          <tr><th> # </th><th>Question Description</th></tr>
          <tr *ngFor="let q of questions">
            <td>{{q.questionId}}</td>
            <td><a href="#" [routerLink]="['../view', q.questionId]">{{q.questionText}}</a></td>
          </tr>
        </table>
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

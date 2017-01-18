import { Component } from '@angular/core';
import {QuestionService} from './practice/question.service';
import {QuestionManageService} from './question/question-manage.service';

@Component({
  selector: 'mcq-web',
  template: `
  <h2> {{title}} </h2>
  <hr>
  <nav>
    <a routerLink="home" routerLinkActive="active">Home</a> |
    <a routerLink="practice/6" routerLinkActive="active">Do Practice</a> |
    <a routerLink="question" routerLinkActive="active">Manage Question</a>
  </nav>
  <router-outlet>
  `,
  providers: [QuestionService, QuestionManageService]
})
export class AppComponent {
  title:string = 'MCQ Web';
}

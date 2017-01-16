import { Component } from '@angular/core';
import {QuestionService} from './question/question.service';

@Component({
  selector: 'mcq-web',
  template: `
  <h2> {{title}} </h2>
  <hr>
  <nav>
    <a routerLink="home" routerLinkActive="active">Home</a> |
    <a routerLink="practice" routerLinkActive="active">Practice</a> |
    <a routerLink="question" routerLinkActive="active">Manage Question</a>
  </nav>

    <router-outlet>

  `,
  providers: [QuestionService]
})
export class AppComponent {
  title:string = 'MCQ Web';
}

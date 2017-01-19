import { Component } from '@angular/core';
import {QuestionService} from './practice/question.service';
import {QuestionManageService} from './question/question-manage.service';

@Component({
  selector: 'mcq-web',
  template: `
  <div class="container-fluid">
  <h2 class="text-info"> {{title}} </h2>
  <nav class="navbar navbar-light bg-faded">
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <a routerLink="home" routerLinkActive="text-uppercase">Home</a>
      </li>
      <li class="nav-item">
        <a routerLink="practice/6" routerLinkActive="text-uppercase">Do Practice</a>
      </li>
      <li class="nav-item">
        <a routerLink="question" routerLinkActive="text-uppercase">Manage Question</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  </div>
  `,
  providers: [QuestionService, QuestionManageService]
})
export class AppComponent {
  title:string = 'MCQ Web';
}

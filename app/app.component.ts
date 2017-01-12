import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import {EmployeeService} from './employee.service';
import {QuestionService} from './question/question.service';

@Component({
  selector: 'mcq-web',
  template: `
  <h1> {{title}} </h1>
  <nav>
      <!-- a routerLink="/persons" routerLinkActive="active">StarWars Chars</a -->
      <a routerLink="/question/1" routerLinkActive="active">Q1</a>
      <a routerLink="/question/2" routerLinkActive="active">Q2</a>
      <a routerLink="/question/3" routerLinkActive="active">Q3</a>
  </nav>

    <router-outlet>

  `,
  providers: [PeopleService, EmployeeService, QuestionService]
})
export class AppComponent {
  title:string = 'MCQ Web';
}

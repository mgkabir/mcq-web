import { Component } from '@angular/core';
import {QuestionService} from './question/question.service';

@Component({
  selector: 'mcq-web',
  template: `
  <h2> {{title}} </h2>
  <hr>
  <nav>
    <a routerLink="home" routerLinkActive="active">Home</a>
    <a routerLink="" routerLinkActive="active">Practice</a>
      <!-- a routerLink="/persons" routerLinkActive="active">StarWars Chars</a >

      <a routerLink="/question/2" routerLinkActive="active">Q2</a>
      <a routerLink="/question/3" routerLinkActive="active">Q3</a -->
  </nav>

    <router-outlet>

  `,
  providers: [QuestionService]
})
export class AppComponent {
  title:string = 'MCQ Web';
}

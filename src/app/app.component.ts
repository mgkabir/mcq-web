import { Component } from '@angular/core';
import {QuestionService} from './tzone/question.service';
import {QuestionManageService} from './question/question-manage.service';

@Component({
	selector: 'mcq-web',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [QuestionService, QuestionManageService]
})

export class AppComponent {
 title:string = 'MCQ Web Application';
}

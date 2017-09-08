import { Component } from '@angular/core';
import {QuestionService} from './tzone/question.service';
import {QuestionManageService} from './question/question-manage.service';
import {AuthService} from './auth.service';

@Component({
	selector: 'mcq-web',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [QuestionService, QuestionManageService]
})

export class AppComponent {
	 title:string = 'MCQ Web Application';
	 userName: string;

	constructor(private authService: AuthService){}

	isLoggedIn(): boolean{
		let isLoggedIn = false;
		if(this.authService.isLoggedIn())
			{
				this.userName = localStorage.getItem('userName');
				isLoggedIn = true;
			}
		return isLoggedIn;
	}

	logout(){
		this.authService.logout();
	}
}

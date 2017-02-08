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
	 loggedInUsername: string = "";

		constructor(private authService: AuthService){}

	isLoggedIn(): boolean{
		let loggedIn: boolean = false;
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));

		if(currentUser){
			this.loggedInUsername = currentUser.username;
			/*if token exists then user is considered loggedIn. Not checking expiration now*/
			if(currentUser.token) loggedIn = true;
		}
		return loggedIn;
	}

	logout(){
		this.authService.logout();
	}
}

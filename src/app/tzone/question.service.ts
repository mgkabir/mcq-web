import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Question } from './question';
import {AuthService} from '../auth.service';

@Injectable()
export class QuestionService{

  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http, private authService:AuthService){
    }

    getRandomQuestion(){
      let headers = new Headers({ 'Authorization': this.authService.token });
      let options = new RequestOptions({ headers: headers });
      console.log(`QuestionService.getRandomQuestion(): token = ${this.authService.token}`);
      return this.http
        .get(`${this.baseUrl}/practice-question`)
        .map(function(res:Response){
          return <Question>({
            questionId:res.json().questionId,
            questionText: res.json().questionText,
            options:res.json().options,
            answerText: res.json().answerText,
          });
        });
    }

    /*Submits selected option */
    submitAnswer(question: Question) : Observable<Response>{
      console.log(`submitAnswer() : Token : ${this.authService.token} `);
      let headers = new Headers({ 'Authorization': this.authService.token });
      let options = new RequestOptions({ headers: headers });
      return this.http
        .get(`${this.baseUrl}/practice-question/${question.questionId}/option/${question.selectedOptionId}`);
    }

}

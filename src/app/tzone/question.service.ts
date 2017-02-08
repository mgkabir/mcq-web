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

    /* practice-question is accessible without any token*/
    getRandomQuestion(): Observable<Question>{
      return this.http
        .get(`${this.baseUrl}/practice-question`)
        .map((res:Response)=>{
          return res.json();
        });
    }

    /*Submits selected option. /practice-question is accessible without any token*/
    submitAnswer(question: Question) : Observable<Response>{
      return this.http
        .get(`${this.baseUrl}/practice-question/${question.questionId}/option/${question.selectedOptionId}`);
    }

}

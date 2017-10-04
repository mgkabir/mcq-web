import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Question } from './question';

@Injectable()
export class QuestionService{

  private baseUrl:string = 'http://localhost:8080';
  //private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';
  constructor(private http:Http){}

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
      // Use POST instead of GET
      return this.http
        .get(`${this.baseUrl}/practice-question/${question.questionId}/option/${question.selectedOptionId}`);
    }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Question } from './question';

@Injectable()
export class QuestionService{

  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http){
    }

    get(id: number): Observable<Question> {
      console.log("Question ID : "+id);
      return this.http
        .get(`${this.baseUrl}/question/${id}`, {headers: this.getHeaders()})
        .map(function(res:Response){
          return <Question>({
            questionId:res.json().questionId,
            questionText: res.json().questionText,
            options:res.json().options,
          });
        });
    }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

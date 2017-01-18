import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { QuestionModel } from './question-model';

@Injectable()
export class QuestionManageService{

  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http){
    }

    /*POST operation for adding QuestionModel */
    addQuestion(question: QuestionModel) : Observable<Response>{
      console.log(`addQuestion() : qText : ${question.questionText}`);
      return this.http
        .post(`${this.baseUrl}/addQuestion`,JSON.stringify(question), {headers: this.getHeaders()});
    }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}

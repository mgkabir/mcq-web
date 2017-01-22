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
      .post(`${this.baseUrl}/questions`,JSON.stringify(question), {headers: this.getContentTypeHeader()});
  }

  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  getQuestions(): Observable<QuestionModel[]>{
    return this.http
      .get(`${this.baseUrl}/questions`, {headers: this.getAcceptHeader()})
      /*
      .map((res:Response)=>{
        let q = <QuestionModel>({
          questionId: res.json().questionId,
          questionText: res.json().questionText,
        });
        return q;
      });
      */

      .map((res:Response) =>
          {
            console.log("getQuestions() : "+res.json());
            return res.json();
  })
}

  private getAcceptHeader(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
}

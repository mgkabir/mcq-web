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


  getQuestions(): Observable<QuestionModel[]>{
    return this.http
      .get(`${this.baseUrl}/questions`, {headers: this.getAcceptHeader()})
      .map(
          (res:Response) =>{
              console.log("getQuestions() : "+res.headers.get("content-type"));
              return res.json();
            })
        }

      getQuestion(id: number): Observable<QuestionModel> {
        console.log("Question ID : "+id);
        return this.http
          .get(`${this.baseUrl}/questions/${id}`, {headers: this.getAcceptHeader()})
          .map(
              (res: Response) =>{
                return res.json();
              });
      }


  private getAcceptHeader(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }

  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

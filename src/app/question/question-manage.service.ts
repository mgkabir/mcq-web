import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { QuestionModel } from './question-model';
import {AuthService} from '../auth.service';

@Injectable()
export class QuestionManageService{

  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http,private authService: AuthService){
    }

    /*POST operation for adding QuestionModel */
  addQuestion(question: QuestionModel) : Observable<Response>{
    console.log(`addQuestion() : ${question.questionId} -- ${question.questionText}`);
    return this.http
      .post(`${this.baseUrl}/questions`,JSON.stringify(question), {headers: this.getContentTypeHeader()});
  }

  /*PUT operation for updating QuestionModel */
updateQuestion(question: QuestionModel) : Observable<Response>{
  console.log(`updateQuestion() : ${question.questionId} -- ${question.questionText}`);
  return this.http
    .put(`${this.baseUrl}/questions`,JSON.stringify(question), {headers: this.getContentTypeHeader()});
}

  getQuestions(): Observable<QuestionModel[]>{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.baseUrl}/questions`, options)
      .map(
          (res:Response) =>{
              console.log("getQuestions() : "+res.headers.get("content-type"));
              return res.json();
            })
        }
        /*
        getUsers(): Observable<User[]> {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            // get users from api
            return this.http.get('/api/users', options)
                .map((response: Response) => response.json());
        }
        */
    getQuestion(id: number): Observable<QuestionModel> {
      console.log("Question ID : "+id);
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
      let options = new RequestOptions({ headers: headers });
      return this.http
        .get(`${this.baseUrl}/questions/${id}`, options)
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

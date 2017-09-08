import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { QuestionModel } from './question-model';
import {AuthService} from '../auth.service';

@Injectable()
export class QuestionManageService{

  private baseUrl:string = 'http://localhost:8080';
//  private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';
  constructor(private http:Http,private authService: AuthService){
    }

    /*POST operation for adding QuestionModel */
  addQuestion(question: QuestionModel) : Observable<Response>{
    console.log(`addQuestion() : ${question.questionId} -- ${question.questionText}`);
    let headers = new Headers({ 'Authorization': localStorage.getItem('token'),'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(`${this.baseUrl}/questions`,JSON.stringify(question), options);
  }

    /*PUT operation for updating QuestionModel */
  updateQuestion(question: QuestionModel) : Observable<Response>{
    console.log(`updateQuestion() : ${question.questionId} -- ${question.questionText}`);
    let headers = new Headers({ 'Authorization': localStorage.getItem('token'),'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http
      .put(`${this.baseUrl}/questions`,JSON.stringify(question), options);
  }

  getQuestions(): Observable<QuestionModel[]>{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.baseUrl}/questions`, options)
      .map(
          (res:Response) =>{
              return res.json();
            })
        }

    getQuestion(id: number): Observable<QuestionModel> {
      console.log("Question ID : "+id);
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': localStorage.getItem('token') });
      let options = new RequestOptions({ headers: headers });
      return this.http
        .get(`${this.baseUrl}/questions/${id}`, options)
        .map(
            (res: Response) =>{
              return res.json();
            });
    }


  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

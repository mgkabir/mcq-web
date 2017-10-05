import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
//import { AuthHttp } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { QuestionModel } from './question-model';
import { AuthService } from '../auth.service';

@Injectable()
export class QuestionManageService{

  private baseUrl:string = 'http://localhost:8080';
//  private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';
  constructor(
      private authService: AuthService,
      private httpClient: HttpClient){}

    /*POST operation for adding QuestionModel */
  addQuestion(question: QuestionModel) : Observable<QuestionModel>{
    return this.httpClient.post(`${this.baseUrl}/questions`,question,{responseType:'json', observe:'body'});
  }

    /*PUT operation for updating QuestionModel */
  updateQuestion(question: QuestionModel) : Observable<QuestionModel>{
    return this.httpClient.put(`${this.baseUrl}/questions`,question,{responseType:'json', observe:'body'});
    
  }

  getQuestions(): Observable<QuestionModel[]>{
    return this.httpClient.get(`${this.baseUrl}/questions`,{responseType:'json', observe:'body'});
  }

  getQuestion(id: number): Observable<QuestionModel> {
    return this.httpClient.get(`${this.baseUrl}/questions/${id}`,{responseType:'json', observe:'body'});
  }
}
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { QuestionModel } from './question-model';
import { AuthService } from '../auth.service';

@Injectable()
export class QuestionManageService{

  private baseUrl:string = 'http://localhost:8080';
//  private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';
  constructor(
      private authService: AuthService,
      private authHttp: AuthHttp){}

    /*POST operation for adding QuestionModel */
  addQuestion(question: QuestionModel) : Observable<Response>{
    return this.authHttp.post(`${this.baseUrl}/questions`,JSON.stringify(question));
  }

    /*PUT operation for updating QuestionModel */
  updateQuestion(question: QuestionModel) : Observable<Response>{
    return this.authHttp.put(`${this.baseUrl}/questions`,JSON.stringify(question));
  }

  getQuestions(): Observable<QuestionModel[]>{
    return this.authHttp
      .get(`${this.baseUrl}/questions`)
      .map((res:Response) =>
        {
          return res.json();
        })
  }

  getQuestion(id: number): Observable<QuestionModel> {
    return this.authHttp
      .get(`${this.baseUrl}/questions/${id}`)
      .map((res: Response) =>
        {
           return res.json();
        });
  }
}
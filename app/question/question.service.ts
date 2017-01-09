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
      let person$ = this.http
        .get(`${this.baseUrl}/question/${id}`, {headers: this.getHeaders()})
        .map(mapQuestion);
        return person$;
    }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapQuestion(response:Response): Question{
    return toQuestion(response.json());
}

function toQuestion(r:any): Question{
  let question = <Question>({
    questionId: r.questionId,
    questionText: r.questionText,
  });
  console.log('Parsed question:', question);
  return question;
}

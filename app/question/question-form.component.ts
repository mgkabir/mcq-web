import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../practice/question.service';
import {QuestionModel} from './question-model';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent{

formTitle: string = "Question Add Form";

question: QuestionModel = new QuestionModel();



onChange(idx:number){
  console.log("selection changed to > "+idx);
  for(let opt of this.question.options){
    console.log(opt.correct);
    if(opt.optionId == idx){
      opt.correct = true;
    }else{
      opt.correct = false;
    }
  }
}


get diagnostic(){
  return JSON.stringify(this.question);
}

}

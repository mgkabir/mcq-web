import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { QuestionManageService } from './question-manage.service';
import { QuestionModel } from './question-model';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent{

formTitle: string = "Question Add Form";
submitMsg: string = "";
question: QuestionModel = new QuestionModel();

constructor(private questionManageService: QuestionManageService){
}

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

/*Call this method when user Submits to Add a Question*/

addQuestion(){
  this.questionManageService
      .addQuestion(this.question)
      .subscribe(
        (r: Response) => {
          console.log(r.json());
          this.submitMsg = "Successful";
        }
      );
}

get diagnostic(){
  return JSON.stringify(this.question);
}

}

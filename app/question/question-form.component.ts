import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../practice/question.service';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent{

qFormMsg: string = "Message from Question Form";

}

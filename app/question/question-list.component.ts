import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { QuestionManageService } from './question-manage.service';

@Component({
  moduleId: module.id,
  selector: 'question-list',
  template:
  `
    <div class="well">
    <p>Question List Component</p>
    </div>
  `
})

export class QuestionListComponent{

  constructor(
    private router: Router,
    private service: QuestionManageService
  ) {}


}

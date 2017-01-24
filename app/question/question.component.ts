import {Component} from '@angular/core';

@Component({
  template: `

    <div class="row">
      <div class="col-md-2">
        <a href="#" [routerLink]="['add']">Add Question</a>
      </div>
      <div class="col-md-2">
        <a href="#"  [routerLink]="['/question']">List Question</a>
      </div>
      <div class="col-md-8"></div>
    </div>
    <router-outlet></router-outlet>
  `
})

export class QuestionComponent{

}

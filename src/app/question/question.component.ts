import {Component} from '@angular/core';

@Component({
  template: `

    <div class="row">
      <div class="col-md-1">
        <!-- a routerLinkActive="text-uppercase text-success" [routerLink]="['./']">Question Home</a-->
      </div>
      <div class="col-md-2">
        <a routerLinkActive="text-uppercase text-success" [routerLink]="['add']">Add Question</a>
      </div>
      <div class="col-md-2">
        <a routerLinkActive="text-uppercase text-success" [routerLink]="['list']">List Question</a>
      </div>
      <div class="col-md-7"></div>
    </div>
    <router-outlet></router-outlet>
  `
})

export class QuestionComponent{

}

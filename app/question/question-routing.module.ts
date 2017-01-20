import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent }  from './question-list.component';
import { QuestionFormComponent }  from './question-form.component';
import { QuestionViewComponent }  from './question-view.component';

const questionRoutes: Routes = [
  { path: 'questions',  component: QuestionListComponent },
  { path: 'question/:id', component: QuestionViewComponent },
  { path: 'question-form', component: QuestionFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(questionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionRoutingModule { }

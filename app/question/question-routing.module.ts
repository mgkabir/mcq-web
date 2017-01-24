import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent }  from './question-list.component';
import { QuestionFormComponent }  from './question-form.component';
import { QuestionViewComponent }  from './question-view.component';

const questionRoutes: Routes = [
  { path: 'questions',  component: QuestionListComponent },
  { path: 'questions/add', component: QuestionFormComponent },
  { path: 'question-edit/:id', component: QuestionFormComponent },
  { path: 'questions/:id', component: QuestionViewComponent }
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

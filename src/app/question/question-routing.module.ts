import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent }  from './question-list.component';
import { QuestionFormComponent }  from './question-form.component';
import { QuestionViewComponent }  from './question-view.component';
import { QuestionHomeComponent }  from './question-home.component';
import { QuestionComponent }  from './question.component';


const questionRoutes: Routes = [
  {
    path: 'question',
    component: QuestionComponent,
    children: [
        { path: '',  component: QuestionHomeComponent },
        { path: 'list',  component: QuestionListComponent },
        { path: 'view/:id', component: QuestionViewComponent },
        { path: 'edit/:id', component: QuestionFormComponent },
        { path: 'add', component: QuestionFormComponent }
    ]
   }
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

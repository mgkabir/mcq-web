import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent }  from './question-list.component';
import { QuestionFormComponent }  from './question-form.component';
import { QuestionViewComponent }  from './question-view.component';
import { QuestionHomeComponent }  from './question-home.component';
import { QuestionComponent }  from './question.component';
import {AuthGuard} from '../auth-guard.service';


const questionRoutes: Routes = [
  {
    path: 'question',
    component: QuestionComponent,
    //canActivate: [AuthGuard], /* Everything under this route are Guarded */
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard], /* All children are Guarded */
        children: [
          { path: '',  component: QuestionHomeComponent},
          { path: 'list', canActivate: [AuthGuard], component: QuestionListComponent }, /* Guarded with AuthGuard*/
          { path: 'view/:id', component: QuestionViewComponent },
          { path: 'edit/:id', component: QuestionFormComponent },
          { path: 'add',canActivate: [AuthGuard], component: QuestionFormComponent }
        ]
      }
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

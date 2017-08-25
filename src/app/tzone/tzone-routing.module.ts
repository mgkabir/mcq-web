import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailsComponent } from './question-details.component';
import { TZoneComponent }  from './tzone.component';
import { TZoneHomeComponent }  from './tzone-home.component';
import { ModelTestComponent }  from './model-test.component';
import { AuthGuard } from '../auth-guard.service';


const tzoneRoutes: Routes = [
  {
    path: 'tzone',
    component: TZoneComponent,
    children: [
        { path: '',  component: TZoneHomeComponent },
        { path: 'practice', component: QuestionDetailsComponent },
        { path: 'modeltest', canActivate: [AuthGuard], component: ModelTestComponent }
    ]
  }
 ];

@NgModule({
  imports: [
    RouterModule.forChild(tzoneRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TZoneRoutingModule { }

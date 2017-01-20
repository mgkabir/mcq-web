import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionManageService } from './question-manage.service';
import { QuestionFormComponent } from './question-form.component';
import { QuestionListComponent } from './question-list.component';
import { QuestionViewComponent } from './question-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionRoutingModule
  ],
  declarations: [
    QuestionListComponent,
    QuestionFormComponent,
    QuestionViewComponent
  ],
  providers: [
    QuestionManageService
  ]
})

export class QuestionModule{}

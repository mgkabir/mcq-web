import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TZoneRoutingModule } from './tzone-routing.module';
import { QuestionService } from './question.service';
import { QuestionDetailsComponent } from './question-details.component';
import { TZoneComponent } from './tzone.component';
import { TZoneHomeComponent } from './tzone-home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TZoneRoutingModule
  ],
  declarations: [
    QuestionDetailsComponent,
    TZoneComponent,
    TZoneHomeComponent
  ],
  providers: [
    QuestionService
  ]
})

export class TZoneModule{}

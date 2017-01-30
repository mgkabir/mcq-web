import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { QuestionModule } from './question/question.module';
import { TZoneModule } from './tzone/tzone.module';

import { AppComponent }  from './app.component';

/* import { QuestionDetailsComponent } from './tzone/question-details.component'; */
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './home/page-not-found.component';


@NgModule({
	declarations: [ AppComponent, HomeComponent, PageNotFoundComponent],
	imports: [ BrowserModule, FormsModule, HttpModule,TZoneModule, QuestionModule, AppRoutingModule],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

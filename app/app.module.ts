import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { QuestionDetailsComponent } from './practice/question-details.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './home/page-not-found.component';
import {QuestionFormComponent} from './question/question-form.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  declarations: [ AppComponent, QuestionDetailsComponent,
        HomeComponent, PageNotFoundComponent, QuestionFormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

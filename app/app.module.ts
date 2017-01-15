import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';

import { QuestionDetailsComponent } from './question/question-details.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, QuestionDetailsComponent, HomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

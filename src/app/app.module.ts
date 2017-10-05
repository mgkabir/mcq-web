import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule }      from './login-routing.module';
import { QuestionModule } from './question/question.module';
import { TZoneModule } from './tzone/tzone.module';

import { AppComponent }  from './app.component';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './home/page-not-found.component';
import { LoginComponent }          from './login.component';

@NgModule({
	declarations: [ AppComponent, HomeComponent, PageNotFoundComponent, LoginComponent],
    imports: [ 
        BrowserModule, 
        FormsModule, 
        TZoneModule, 
        QuestionModule, 
        LoginRoutingModule, 
        AppRoutingModule,
        HttpModule,
        HttpClientModule
    ],
	providers: [
        {
           provide: HTTP_INTERCEPTORS,
           useClass: TokenInterceptor,
           multi: true
         }
    ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

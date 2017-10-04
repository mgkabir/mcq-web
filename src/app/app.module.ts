import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
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
	imports: [ BrowserModule, FormsModule, HttpModule,TZoneModule, QuestionModule, LoginRoutingModule, AppRoutingModule],
	providers: [        
        AuthHttp,
        provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'Bearer',
            tokenName: 'token',
            //tokenGetter: (() => localStorage.getItem('token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        })
    ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

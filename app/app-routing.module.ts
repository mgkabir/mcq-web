import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
/* import { QuestionDetailsComponent } from './tzone/question-details.component'; */
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { QuestionFormComponent } from './question/question-form.component';

// Route config let's you map routes to components
const appRoutes: Routes = [
/*
  {
    path: 'practice/:id', component: QuestionDetailsComponent
  },
  */
/*{
    path: 'question', component: QuestionFormComponent
  }, */
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

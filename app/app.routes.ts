import { Routes, RouterModule } from '@angular/router';

import { QuestionDetailsComponent } from './practice/question-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'practice/:id',
    component: QuestionDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

export const routing = RouterModule.forRoot(routes);

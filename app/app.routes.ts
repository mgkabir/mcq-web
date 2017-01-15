import { Routes, RouterModule } from '@angular/router';

import { QuestionDetailsComponent } from './question/question-details.component';
import {HomeComponent} from './home/home.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'question/:id',
    component: QuestionDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);

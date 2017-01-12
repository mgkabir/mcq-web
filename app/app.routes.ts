import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

import {EmployeeListComponent} from './employee-list.component';

import { QuestionDetailsComponent } from './question/question-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // for employees
  {
    path: 'employees',
    component: EmployeeListComponent,
  },

  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'question/:id',
    component: QuestionDetailsComponent
  },

  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/question/2',
    //redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);

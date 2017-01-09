import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <nav>
      <a routerLink="/persons" routerLinkActive="active">StarWars Chars</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
  </nav>
  <router-outlet>
  `,
  providers: [PeopleService, EmployeeService]
})
export class AppComponent {
  title:string = 'Star Wars Characterz!';
}

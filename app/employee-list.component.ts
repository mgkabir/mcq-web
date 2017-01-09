import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Employee Data Retrieving ...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let employee of employees">
            <a href="#" [routerLink]="['/employees', employee.id]">
          {{employee.name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private employeeService : EmployeeService){ }

  ngOnInit(){
    this.employeeService
      .getAll()
      .subscribe(
         /* happy path */ p => this.employees = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}

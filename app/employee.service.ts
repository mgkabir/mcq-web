import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Employee } from './employee';

@Injectable()
export class EmployeeService{

  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http){
    }

    getAll(): Observable<Employee[]>{
      let employees$ = this.http
        .get(`${this.baseUrl}/employees`, {headers: this.getHeaders()})
        .map(mapEmployees)
        .catch(handleError);
        return employees$;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
}

function mapEmployees(response:Response): Employee[]{
   // uncomment to simulate error:
   //throw new Error('ups! Force choke!');
console.log("Response Status: "+response.statusText+" ToString : "+response.json());
   // The response of the API has a results
   // property with the actual results
   //return response.json().results.map(toEmployee)
   return response.json().map(toEmployee);
}

function toEmployee(r:any): Employee{
  console.log('Parsing Employee:');
  let employee = <Employee>({
    id: r.id,
    name: r.name,
    department: r.department,
  });
  console.log('Parsed Employee:'+ employee);
  return employee;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Error Fetching Employee data.`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

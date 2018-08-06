import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Estudiante } from '../models/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  selectedEmployee: Estudiante;
  employees: Estudiante[];
  
  //readonly URL_API = 'http://deber-arqui.herokuapp.com/estudiante';

  readonly URL_API = 'http://damp-cove-56478.herokuapp.com/estudiante';
 // readonly URL_API = 'http://localhost:5000/estudiante';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Estudiante();
}
putEmploye(employee: Estudiante) {
  return this.http.put(this.URL_API, employee);
}

getEmployees() {
  return this.http.get(this.URL_API);
}

putEmployee(employee: Estudiante) {
  return this.http.put(this.URL_API + `/${employee.cedula}`, Estudiante);
}

deleteEmployee(cedula: string) {
  return this.http.delete(this.URL_API + `/${cedula}`);
}


}

import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../../models/estudiante';

declare var M: any; 

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
  providers: [ EstudianteService ]
})
export class EstudianteComponent implements OnInit {

  constructor(private employeeService: EstudianteService) { }

  ngOnInit() {
    this.getEmployees();
  }
  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.employeeService.putEmploye(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Estudiante[];
      });
  }

  editEmployee(employee: Estudiante) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Estudiante();
    }
  }

}

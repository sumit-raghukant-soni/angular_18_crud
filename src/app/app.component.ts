import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/EmployeeModel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  employeeFrom: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor(){
    this.createForm();

    const oldData = localStorage.getItem("EmpData");
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }
  }

  createForm(){
    this.employeeFrom = new FormGroup({
        empId: new FormControl(this.employeeObj.empId),
        name: new FormControl(this.employeeObj.name),
        state: new FormControl(this.employeeObj.state),
        city: new FormControl(this.employeeObj.city),
        address: new FormControl(this.employeeObj.address),
        pincode: new FormControl(this.employeeObj.pincode),
        contactNo: new FormControl(this.employeeObj.contactNo),
        emailId: new FormControl(this.employeeObj.emailId),
    })
  }

  onAdd(){
    debugger;
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeFrom.controls['empId'].setValue(parseData.length + 1);
      this.employeeList.unshift(this.employeeFrom.value);
    }
    else{
      this.employeeList.unshift(this.employeeFrom.value);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  }
}

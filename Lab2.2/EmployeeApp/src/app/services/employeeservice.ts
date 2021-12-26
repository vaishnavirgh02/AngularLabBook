import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'abc',10000,"JAVA"),
  
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}

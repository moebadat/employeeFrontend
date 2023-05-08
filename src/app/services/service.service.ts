import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  // backend url

  private url ='http://localhost:8080/employees';

  // GET, ADD, UPDATE and DELETE Http methods that make calls to our restful API (backend)
  getEmployeeAll(){
    return this.http.get(`${this.url}`)
  }
  
  getEmployee(empId:any): Observable<any[]>{
    return this.http.get<any>(`${this.url}/${empId}`)
  }

  addEmployee(val:any){
    return this.http.post(`${this.url}`,val)
  }

  updateEmployee(val:any,id:any){
      return this.http.put(`${this.url}/${id}`, val)
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}

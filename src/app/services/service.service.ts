import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  private url ='http://localhost:8080/employees';

  /* public getData(id:any):Observable< any[]>{
    return this.http.get<any>("this.url")
  }

  public getOne(id:any):Observable <any[]>{
    return this.http.get<any>(`http://localhost:8080/employees${id}`)
  }

  public addData(val:any):Observable<any>{
    return this.http.post(this.url, val)
  }

  public updateData(val:any, id:any){
    return this.http.put(this.url+id, val)
  }
  public deleteData(id:any){
    return this.http.delete(this.url+id)
  } */


  getEmployeeAll(){
    return this.http.get(this.url)
  }
  
  getEmployee(empId:any): Observable<any[]>{
    return this.http.get<any>(`http://localhost:8080/employees${empId}`)
  }
  /*getEmployee(empId:number){
    return this.http.get(this.url+empId)
  }*/

  addEmployee(val:any){
    return this.http.post(this.url,val)
  }

  updateEmployee(id:number,body:any){
      return this.http.put(this.url+id,body)
  }

  deleteEmployee(id:any){
    return this.http.delete(this.url+id)
  }
}

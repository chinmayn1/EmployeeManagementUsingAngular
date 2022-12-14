import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/comments",data).pipe(map((res:any)=>{return res;}))
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/comments").pipe(map((res:any)=>{return res;}))
  }
  updateEmployee(id:number,data:any){
    return this.http.put<any>("http://localhost:3000/comments/"+id,data).pipe(map((res:any)=>{return res;}))
  }
  deleteEmployee(data:any){
    return this.http.delete<any>("http://localhost:3000/comments/"+data).pipe(map((res:any)=>{return res;}))
  }
}

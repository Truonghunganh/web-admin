import { AppCommonService } from '@common/services';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class CustomersService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    
    getCustomers(page: number,status:number): Observable<any> {
        
      return this.http.get<any>(`/api/users?role_name=Customer&page=${page}&status=${status}`, this.appCommonService.httpOptions)
        .pipe(
          tap(data=> of(data),
          catchError(this.errorHandler))   
        )
        
    }
    
    addCustomer(customer:any):Observable<any>{     
      return this.http.post("/api/users?role_name=Customer",customer,this.appCommonService.httpOptions).pipe(
          tap(category=>{
              of(category)
              
          }),
          catchError(e=>of(null))
      )
  }
  upDateCategory(category:any,id:number):Observable<any>{
    return this.http.put("/api/categories/"+id,category,this.appCommonService.httpOptions).pipe(
        tap(category=>{
            console.log(category);
            of(category)
            
        }),
        catchError(e=>of(null))
    )
  }
  updateFile(file: File):Observable<any>{
    console.log(file);
    const formData = new FormData();
    formData.append('file', file,file.name);
  
    return this.http.post("/api/files",formData,this.appCommonService.httpOptions).pipe(
      tap(data=>{
         of(data);
      })
      , catchError(e=>of(null))
    )
  
  }
  deleteCustomer(id:number):Observable<any>{
    return this.http.delete("/api/users?role_name=Customer/"+id,this.appCommonService.httpOptions).pipe(
        tap(category=>{
      
            of(category)
            
        }),
        catchError(e=>of(null))
    )
  }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Serve error");
      }  
    
    
}

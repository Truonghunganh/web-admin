import { AppCommonService } from '@common/services';
import {  tap, catchError } from 'rxjs/operators';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError, of, Observable } from 'rxjs';

@Injectable()
export class ServicesService {
    constructor(private http :HttpClient, private appCommonService: AppCommonService) {}
    
    addService(service:any): Observable<any> {
      return this.http.post<any>("/api/services",service,this.appCommonService.httpOptions).pipe(
        tap(data=> of(data),
        catchError(this.errorHandler))   
    
      )
    }
  
    updateService(service:any,id:number): Observable<any> {
      return this.http.put<any>(`/api/services/${id}`,service,this.appCommonService.httpOptions).pipe(
        tap(data=> of(data),
        catchError(this.errorHandler))   
    
      )
    }

    getServices(id:number, page: number): Observable<any> {
        return this.http.get<any>(`/api/services?category_id=${id}`,this.appCommonService.httpOptions).pipe(
            tap(data=>{
                of(data)
                
            }),
            catchError(this.errorHandler)
        )
    }
  
    getCategories(): Observable<any> {
        return this.http.get<any>(`/api/categories`, this.appCommonService.httpOptions)
          .pipe(
            tap(data=> of(data),
            catchError(e=>of(null)))   
          )
    }
  
    getCategory(id: number): Observable<any> {
      return this.http.get<any>(`/api/categories/`+id,this.appCommonService.httpOptions)
        .pipe(
          tap(data=> {
            
            of(data)
          },
          catchError(e=>of(null)))   
        )
  }
  
  // getService(id: number): any {
  //   return this.http.get<any>(`/api/services/`+id, this.appCommonService.httpOptions)
  //     .toPromise();
  // }
  getService(id: number):Observable<any> {
    return this.http.get<any>(`/api/services/`+id, this.appCommonService.httpOptions).pipe(
      tap(data=> of(data)),
      catchError(e=>of(null))
      
    );
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

  deleteService(id: number): Observable<any>{
    return this.http.delete("/api/services/"+id,this.appCommonService.httpOptions).pipe(
      tap(data=>of(data)),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Serve error");
  }
    
}

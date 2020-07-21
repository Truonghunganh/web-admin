import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import {  catchError, tap } from 'rxjs/operators';
import { AppCommonService } from '@common/services';


@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}
    
    getCategories(page:number): Observable<any> {
      return this.http.get<any>(`/api/categories?page=${page}`, this.appCommonService.httpOptions)
      .pipe(
        tap(data=> {
          of(data)
        },
        catchError(e=>of(null)))   
      )
        
    }
    
    getCategory(id: number): Observable<any> {
      return this.http.get<any>(`/api/categories/`+id, this.appCommonService.httpOptions)
        .pipe(
          tap(data=> {
            of(data)
          },
          catchError(e=>of(null)))   
        )
  }

  addCategory(category:any):Observable<any>{
    return this.http.post("/api/categories",category,this.appCommonService.httpOptions).pipe(
        tap(category=>{
            of(category)
        }),
        catchError(e=>of(null))
    )
  }

  upDateCategory(category:any,id:number):Observable<any>{
    return this.http.put("/api/categories/"+id,category,this.appCommonService.httpOptions).pipe(
        tap(category=>{
            of(category)
            
        }),
        catchError(e=>of(null))
    )
  }
  
  updateFile(file: File):Observable<any>{
    const formData = new FormData();
    formData.append('file', file,file.name);
  
    return this.http.post("/api/files",formData,this.appCommonService.httpOptions).pipe(
      tap(data=>{
         of(data);
      })
      , catchError(e=>of(null))
    )
  
  }
  
  deleteCategory(id:number):Observable<any>{
    return this.http.delete("/api/categories/"+id,this.appCommonService.httpOptions).pipe(
        tap(category=>{
            console.log(category);
            of(category)
            
        }),
        catchError(e=>of(null))
    )
  }
  
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Serve error");
  }  

}

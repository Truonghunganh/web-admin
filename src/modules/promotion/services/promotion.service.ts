import { AppCommonService } from '@common/services';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class PromotionService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    private httpOptions = {
      headers: new HttpHeaders({     
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC81NC44NC4xOTUuMTU1XC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTU5MzAxODc4MCwibmJmIjoxNTkzMDE4NzgwLCJqdGkiOiJFQlhjemV4N2NxZGU3WWJPIiwic3ViIjozNCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.iHDnpq7tZCJXqdXxCTbBw1dvQP7XNjCavusJkOUD3v0` ,
        'Access-Control-Allow-Credentials': 'true',
        'Api-Key': `${environment.apiKey}`,
      })
    };
    
    getPromotions(page:number): Observable<any> {
      return this.http.get<any>(`/api/promotions?page=${page}`, this.appCommonService.httpOptions)
        .pipe(
          tap(data=> of(data),
          catchError(this.errorHandler))   
        )

        
    }
    
    
    addPromotion(promotion:any):Observable<any>{
      console.log(promotion);
      
      return this.http.post("/api/promotions",promotion,this.appCommonService.httpOptions).pipe(
          tap(promotion=>{
              console.log(promotion);
              
              of(promotion)
              
          }),
          catchError(e=>of(null))
      )
  }
    
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Serve error");
  }  

}

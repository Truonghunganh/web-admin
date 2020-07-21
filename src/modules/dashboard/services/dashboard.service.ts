import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { AppCommonService } from '@common/services';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {
    }

    getCustomerData(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/total-customers', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getDoctorData(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/total-doctors', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getServicerData(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/total-services', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getCategoryData(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/total-categories', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getTopServices(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/top-services', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getDataChart(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/subscription-overview', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getDataBar(): Observable<any>  {
        return this.http.get<any>('/api/dashboard/orders-by-month', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Serve error");
    }
}

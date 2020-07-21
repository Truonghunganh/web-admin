import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppCommonService } from '@common/services';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class OrdersService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getListOrders(text:string, page:number, per_page:number, statuses:number): Observable<any>  {
        return this.http.get<any>(`/api/orders?service_name=${text}&page=${page}&per_page=${per_page}&statuses[]=${statuses}`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getDetailOrder(orderId:number): Observable<any>  {
        return this.http.get<any>(`/api/orders/detail/${orderId}`, this.appCommonService.httpOptions)
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

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppCommonService } from '@common/services';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class PermissionCustomerService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getListCustomer(page: number): Observable<any>  {
        return this.http.get<any>('/api/users/in-role/customer?page=${page}', this.appCommonService.httpOptions)
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

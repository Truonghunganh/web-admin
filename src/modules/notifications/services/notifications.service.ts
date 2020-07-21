import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppCommonService } from '@common/services';
import { tap, catchError } from 'rxjs/operators';
import { type } from 'os';
import { NotificationCustom } from '../models';

@Injectable()
export class NotificationsService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    pushNotification(obj: NotificationCustom): Observable<any> {
        console.log(obj)
        return this.http.post<any>(`/api/notifications/admin-push`, obj, this.appCommonService.httpOptions)
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

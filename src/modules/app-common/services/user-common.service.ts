import { Injectable, Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AppCommonService } from './app-common.service';

@Injectable()
export class UserCommonService {
  constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

  getListUserByRole(role: string, page: number, status:number): Observable<any>  {
      return this.http.get<any>(`/api/users?role_name=${role}&page=${page}&status=${status}`, this.appCommonService.httpOptions)
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

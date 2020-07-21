import { Injectable, Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Injectable()
export class AppCommonService {
    constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router,private authService: AuthService) {
      if (!this.authService.currentAdmin) {
          this.router.navigate(['/auth/login']);
      }
    }

    public httpOptions = {
      headers: new HttpHeaders({     
          'Authorization': `Bearer ${JSON.parse(this.storage.get('admin')).token}` ,
          'Access-Control-Allow-Credentials': 'true',
          'Api-Key': `${environment.apiKey}`,
      },
      )
  }
      
    getAppCommon$(): Observable<{}> {
        return of({});
    }

    upload(file: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', file, file.name)
     return this.http.post<any>('/api/files',formData, this.httpOptions)
      .pipe(
        tap(data=> of(data),
        catchError(this.errorHandler))   
      )
    } 

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Serve error");
    }
}

import { Injectable, Inject } from '@angular/core';
import { Observable, of, BehaviorSubject, ReplaySubject, throwError } from 'rxjs';
import { Admin} from '../models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private adminSubject: BehaviorSubject<any>;
    public admin: Observable<Admin>;
    public httpOptions = {
        headers: new HttpHeaders({     
            'Access-Control-Allow-Credentials': 'true',
            'Api-Key': `${environment.apiKey}`,
        })
    } 
    constructor(
        private _router: Router, 
        private _http: HttpClient, 
        @Inject(LOCAL_STORAGE) private storage: WebStorageService) {        
        this.adminSubject = new BehaviorSubject<Admin>(JSON.parse(this.storage.get('admin')));
        this.admin = this.adminSubject.asObservable();
    }

    public get currentAdmin() : Admin {
        return this.adminSubject.value;
    }


    login(phone: string, password: string) {
        return this._http.post<any>(`/api/login`, 
                                    { phone, password, device_token: '1234aHHHH'}, 
                                    this.httpOptions)
            .pipe(
                map(data => {
                    if (data.data.user.role_id == 1 && data.data.user.status == 1) {
                        this.storage.set('admin',JSON.stringify(data.data) )
                        this.adminSubject.next(data.data)
                        return of(data)
                    } else {
                        throwError
                    }
                },
                catchError(this.errorHandler)
                )  
            );    
    }

    logout(): void {
        this.storage.remove('admin');
        this.adminSubject.next(null);
        this._router.navigate(["/auth/login"]);
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Serve error");
    }
}



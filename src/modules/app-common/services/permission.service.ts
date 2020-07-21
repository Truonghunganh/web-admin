import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppCommonService } from '@common/services';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class PermissionService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getListByRole(role: string, page: number): Observable<any>  {
        return this.http.get<any>(`/api/users/in-role/${role}?page=${page}`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getListNonePermissionsByRole(role: string): Observable<any>  {
        return this.http.get<any>(`/api/permissions/${role}/denied`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getListNonePermissionsById(userId: number): Observable<any>  {
        return this.http.get<any>(`/api/permissions/users/${userId}/denied`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getListPermissionsByRole(role: string): Observable<any>  {
        return this.http.get<any>(`/api/permissions/${role}/granted`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getListPermissionsById(userId:number): Observable<any>  {
        return this.http.get<any>(`/api/permissions/users/${userId}/granted`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    submitChangePermission(role: string,permissionIds: Array<number>): Observable<any>  {
        return this.http.post<any>('/api/permissions/by-role', { role_name: role, route_ids: permissionIds},this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    submitChangePermissionById(userId:number, permissionIds: Array<number>): Observable<any>  {
        return this.http.post<any>('/api/permissions/by-user', { user_id: userId, route_ids: permissionIds, type: 'granted'},this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    deletePermission(role:string, permissionIds: Array<number>): Observable<any>  {
        const  httpOptions = {
            headers: this.appCommonService.httpOptions.headers,
            body: { role_name: role, route_ids: permissionIds}
        }
        return this.http.delete<any>('/api/permissions/by-role', httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    deletePermissionById(userId: number, permissionIds: Array<number>): Observable<any>  {
        return this.http.post<any>('/api/permissions/by-user', { user_id: userId, route_ids: permissionIds, type: 'denied'},this.appCommonService.httpOptions)
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

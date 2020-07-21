import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppCommonService } from '@common/services';

@Injectable()
export class DoctorsService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}
    
    getDetailDoctor(doctorId:number): Observable<any>  {
        return this.http.get<any>(`/api/users/${doctorId}`, this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    getListDoctorApprove(): Observable<any>  {
        return this.http.get<any>('/api/doctors/waiting', this.appCommonService.httpOptions)
        .pipe(
            tap(data=> {
                of(data.data)
            },
            catchError(this.errorHandler))   
          )
    }

    approveDoctor(doctorId: number): Observable<any>  {
        const doctor_ids = [doctorId]
        return this.http.put<any>(`/api/doctors/accept?`,{doctor_ids}, this.appCommonService.httpOptions)
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

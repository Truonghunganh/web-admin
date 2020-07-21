import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PermissionAdminService {
    constructor() {}

    getPermissionDoctor$(): Observable<{}> {
        return of({});
    }

}

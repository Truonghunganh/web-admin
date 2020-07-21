import { TestBed } from '@angular/core/testing';

import { PermissionDoctorGuard } from './permission-doctor.guard';

describe('_Template Module Guards', () => {
    let permissionDoctorGuard: PermissionDoctorGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionDoctorGuard],
        });
        permissionDoctorGuard = TestBed.inject(PermissionDoctorGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionDoctorGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

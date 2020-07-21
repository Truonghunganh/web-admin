import { TestBed } from '@angular/core/testing';

import { PermissionDoctorService } from './permission-doctor.service';

describe('PermissionDoctorService', () => {
    let permissionDoctorService: PermissionDoctorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionDoctorService],
        });
        permissionDoctorService = TestBed.inject(PermissionDoctorService);
    });

    describe('getPermissionDoctor$', () => {
        it('should return Observable<PermissionDoctor>', () => {
            permissionDoctorService.getPermissionDoctor$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

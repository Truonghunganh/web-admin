import { TestBed } from '@angular/core/testing';

import { PermissionAdminService } from './permission-admin.service';

describe('PermissionAdminService', () => {
    let permissionAdminService: PermissionAdminService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionAdminService],
        });
        permissionAdminService = TestBed.inject(PermissionAdminService);
    });

    describe('getPermissionAdmin$', () => {
        it('should return Observable<PermissionAdmin>', () => {
            permissionAdminService.getPermissionAdmin$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

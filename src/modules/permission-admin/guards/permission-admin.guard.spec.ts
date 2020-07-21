import { TestBed } from '@angular/core/testing';

import { PermissionAdminGuard } from './permission-admin.guard';

describe('_Template Module Guards', () => {
    let permissionAdminGuard: PermissionAdminGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionAdminGuard],
        });
        permissionAdminGuard = TestBed.inject(PermissionAdminGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionAdminGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

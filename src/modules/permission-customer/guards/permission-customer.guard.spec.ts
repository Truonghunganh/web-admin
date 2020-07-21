import { TestBed } from '@angular/core/testing';

import { PermissionCustomerGuard } from './permission-customer.guard';

describe('_Template Module Guards', () => {
    let permissionCustomerGuard: PermissionCustomerGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionCustomerGuard],
        });
        permissionCustomerGuard = TestBed.inject(PermissionCustomerGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionCustomerGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

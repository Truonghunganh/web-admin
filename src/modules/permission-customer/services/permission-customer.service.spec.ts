import { TestBed } from '@angular/core/testing';

import { PermissionCustomerService } from './permission-customer.service';

describe('PermissionCustomerService', () => {
    let permissionCustomerService: PermissionCustomerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionCustomerService],
        });
        permissionCustomerService = TestBed.inject(PermissionCustomerService);
    });

    describe('getPermissionCustomer$', () => {
        it('should return Observable<PermissionCustomer>', () => {
            permissionCustomerService.getPermissionCustomer$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

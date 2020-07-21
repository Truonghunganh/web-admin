import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';

describe('CustomersService', () => {
    let customersService: CustomersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CustomersService],
        });
        customersService = TestBed.inject(CustomersService);
    });

    describe('getCustomers$', () => {
        it('should return Observable<Customers>', () => {
            customersService.getCustomers$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

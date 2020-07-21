import { TestBed } from '@angular/core/testing';

import { CustomersGuard } from './customers.guard';

describe('_Template Module Guards', () => {
    let customersGuard: CustomersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CustomersGuard],
        });
        customersGuard = TestBed.inject(CustomersGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            customersGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

import { TestBed } from '@angular/core/testing';

import { OrdersGuard } from './orders.guard';

describe('_Template Module Guards', () => {
    let ordersGuard: OrdersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [OrdersGuard],
        });
        ordersGuard = TestBed.inject(OrdersGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            ordersGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

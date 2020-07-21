import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
    let ordersService: OrdersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OrdersService],
        });
        ordersService = TestBed.inject(OrdersService);
    });

    describe('getOrders$', () => {
        it('should return Observable<Orders>', () => {
            ordersService.getOrders$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

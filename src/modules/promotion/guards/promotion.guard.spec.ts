import { TestBed } from '@angular/core/testing';

import { PromotionGuard } from './promotion.guard';

describe('_Template Module Guards', () => {
    let promotionGuard: PromotionGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PromotionGuard],
        });
        promotionGuard = TestBed.inject(PromotionGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            promotionGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

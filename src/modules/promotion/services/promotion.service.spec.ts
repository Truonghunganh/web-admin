import { TestBed } from '@angular/core/testing';

import { PromotionService } from './promotion.service';

describe('PromotionService', () => {
    let promotionService: PromotionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PromotionService],
        });
        promotionService = TestBed.inject(PromotionService);
    });

    describe('getPromotion$', () => {
        it('should return Observable<Promotion>', () => {
            promotionService.getPromotion$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});

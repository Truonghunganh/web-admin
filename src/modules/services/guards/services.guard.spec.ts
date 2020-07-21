import { TestBed } from '@angular/core/testing';

import { ServicesGuard } from './services.guard';

describe('_Template Module Guards', () => {
    let servicesGuard: ServicesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ServicesGuard],
        });
        servicesGuard = TestBed.inject(ServicesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            servicesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

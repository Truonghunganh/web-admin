import { TestBed } from '@angular/core/testing';

import { CategoriesGuard } from './categories.guard';

describe('_Template Module Guards', () => {
    let categoriesGuard: CategoriesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CategoriesGuard],
        });
        categoriesGuard = TestBed.inject(CategoriesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            categoriesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

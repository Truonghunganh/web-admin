import { TestBed } from '@angular/core/testing';

import { NotificationsGuard } from './notifications.guard';

describe('_Template Module Guards', () => {
    let notificationsGuard: NotificationsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [NotificationsGuard],
        });
        notificationsGuard = TestBed.inject(NotificationsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            notificationsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

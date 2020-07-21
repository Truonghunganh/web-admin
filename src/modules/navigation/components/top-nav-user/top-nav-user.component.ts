import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
import { tap, map } from 'rxjs/operators';
import { Admin } from '@modules/auth/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    public admin: any
    constructor(public authService: AuthService) {
    }
    ngOnInit() {
        this.admin = this.authService.currentAdmin
    }

    logout() {
        this.authService.logout()
    }
}

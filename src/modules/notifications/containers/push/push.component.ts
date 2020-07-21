import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-push',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './push.component.html',
    styleUrls: ['push.component.scss'],
})
export class PushComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

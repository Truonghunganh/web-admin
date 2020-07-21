import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-add-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add-detail.component.html',
    styleUrls: ['add-detail.component.scss'],
})
export class AddDetailComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

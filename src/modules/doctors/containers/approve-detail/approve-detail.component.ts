import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-approve-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './approve-detail.component.html',
    styleUrls: ['approve-detail.component.scss'],
})
export class ApproveDetailComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-remove-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './remove-detail.component.html',
    styleUrls: ['remove-detail.component.scss'],
})
export class RemoveDetailComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

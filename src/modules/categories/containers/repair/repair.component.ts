import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-repair',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './repair.component.html',
    styleUrls: ['repair.component.scss'],
})
export class RepairComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

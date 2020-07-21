import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-remove-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './remove-all.component.html',
    styleUrls: ['remove-all.component.scss'],
})
export class RemoveAllComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-add-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add-all.component.html',
    styleUrls: ['add-all.component.scss'],
})
export class AddAllComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

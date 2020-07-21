import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

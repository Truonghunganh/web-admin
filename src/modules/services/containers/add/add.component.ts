import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add.component.html',
    styleUrls: ['add.component.scss'],
})
export class AddComponent implements OnInit {
    
    constructor(private router: Router, private authService: AuthService) {
        if (!this.authService.currentAdmin) {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnInit() {}
}

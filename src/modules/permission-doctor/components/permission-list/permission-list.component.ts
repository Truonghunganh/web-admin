import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { PermissionService } from '@common/services';

@Component({
    selector: 'sb-permission-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-list.component.html',
    styleUrls: ['permission-list.component.scss'],
})
export class PermissionListComponent implements OnInit {
    public doctors = [];
    public url = environment.url;
    public pageSize = 15;
    public page = 1;
    public total = 0;
    constructor(private router: Router, private permissionService: PermissionService) {}
    
    ngOnInit() {
        this.getListCustomer();
    }

    getListCustomer(page=1) {
        this.permissionService.getListByRole('doctor',page).subscribe(response => {
            this.doctors = response.data;
        })
    }

    addAll() {
        this.router.navigate(['/permission-doctor/add'])
    }

    removeAll() {
        this.router.navigate(['/permission-doctor/remove'])
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getListCustomer(this.page)
    }
}

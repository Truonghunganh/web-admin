import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { PermissionService } from '@common/services';

@Component({
    selector: 'sb-permission-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-list.component.html',
    styleUrls: ['permission-list.component.scss'],
})
export class PermissionListComponent implements OnInit {
    public admins = [];
    public url = environment.url;
    public pageSize = 15;
    public page = 1;
    public total = 0;
    constructor(private router: Router, private permissionService: PermissionService) {}
    ngOnInit() {
        this.getListAdmin();
    }

    getListAdmin(page=1) {
        this.permissionService.getListByRole('admin',page).subscribe(response => {
            this.admins = response.data;
            console.log(this.admins)
        })
    }

    addAll() {
        this.router.navigate(['/permission-admin/add'])
    }

    removeAll() {
        this.router.navigate(['/permission-admin/remove'])
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getListAdmin(this.page)
    }
}

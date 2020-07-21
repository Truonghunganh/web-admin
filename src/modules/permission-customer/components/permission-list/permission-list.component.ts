import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { PermissionCustomerService } from '@modules/permission-customer/services';
import { PermissionService } from '@common/services';

@Component({
    selector: 'sb-permission-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-list.component.html',
    styleUrls: ['permission-list.component.scss'],
})
export class PermissionListComponent implements OnInit {
    public customers = [];
    public url = environment.url;
    public pageSize = 15;
    public page = 1;
    public total = 0;
    constructor(private router: Router, private permissionService: PermissionService) {}
    
    ngOnInit() {
        this.getListCustomer();
    }

    getListCustomer(page=1) {
        this.permissionService.getListByRole('customer',page).subscribe(response => {
            this.customers = response.data;
            console.log(this.customers)
        })
    }

    addAll() {
        this.router.navigate(['/permission-customer/add'])
    }

    removeAll() {
        this.router.navigate(['/permission-customer/remove'])
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getListCustomer(this.page)
    }
}

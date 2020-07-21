import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'sb-dashboard-total',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-total.component.html',
    styleUrls: ['dashboard-total.component.scss'],
})
export class DashboardTotalComponent implements OnInit {
    public customerData$: Observable<any> = new Observable<any>();
    public doctorData$: Observable<any> = new Observable<any>();
    public serviceData$: Observable<any> = new Observable<any>();
    public categoryData$: Observable<any> = new Observable<any>();
    
    constructor(private _dashboardService: DashboardService) {}
    
    ngOnInit() {
        this.getTotalCustomers()
        this.getTotalDoctors()
        this.getTotalService()
        this.getTotalCategories()
    }

    
    getTotalCustomers() {
        this.customerData$ = this._dashboardService.getCustomerData().pipe(
            map(response => response.data["total_customers"])
        )
    }

    getTotalDoctors() {
        this.doctorData$ = this._dashboardService.getDoctorData().pipe(
            map(response => response.data["total_doctors"])
        )
    }

    getTotalService() {
        this.serviceData$ = this._dashboardService.getServicerData().pipe(
            map(response => response.data["total_services"])
        )
    }

    getTotalCategories() {
        this.categoryData$ = this._dashboardService.getCategoryData().pipe(
            map(response => response.data["total_categories"])
        )
    }

}

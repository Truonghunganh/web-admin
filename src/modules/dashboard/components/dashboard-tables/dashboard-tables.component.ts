import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Component({
    selector: 'sb-dashboard-tables',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-tables.component.html',
    styleUrls: ['dashboard-tables.component.scss'],
})
export class DashboardTablesComponent implements OnInit {
    public url = environment.url
    public topServices$: Observable<any> = new Observable<any>();
    constructor(private _dashboardService: DashboardService) {}
    ngOnInit() {
        this.getTopServices()
    }

    getTopServices() {
        this.topServices$ = this._dashboardService.getTopServices().pipe(
            map(response => response.data)
        )
    }
}

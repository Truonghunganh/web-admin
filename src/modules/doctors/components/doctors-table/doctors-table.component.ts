import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { DoctorsService } from '@modules/doctors/services';
import { Observable } from 'rxjs';
import { timeStamp } from 'console';
import { PermissionService, UserCommonService } from '@common/services';

@Component({
    selector: 'sb-doctors-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './doctors-table.component.html',
    styleUrls: ['doctors-table.component.scss'],
})
export class DoctorsTableComponent implements OnInit {
    public pageSize = 20;
    public page = 1;
    public total = 0;
    public url = environment.url;
    // public doctors = [];
    public doctors$: Observable<any> = new Observable<any>();
    constructor(private router: Router, private doctorService: DoctorsService, private userService: UserCommonService) {}
    ngOnInit() {
        this.getListDoctors()
    }


    getListDoctors(page=1, status=1) {
        this.doctors$ = this.userService.getListUserByRole('Doctor', page, status).pipe(
            map(response =>
                response.data)
        )
    }

    onPageChange(pageNum: number): void {
        this.page = pageNum;
        this.getListDoctors(this.page)
    }

    navigaDetail(doctorId: number) {
        this.router.navigate([`/doctors/detail/${doctorId}`]);
    }
}

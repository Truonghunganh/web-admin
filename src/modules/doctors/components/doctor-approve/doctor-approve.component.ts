import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DoctorsService } from '@modules/doctors/services';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sb-doctor-approve',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './doctor-approve.component.html',
    styleUrls: ['doctor-approve.component.scss'],
})
export class DoctorApproveComponent implements OnInit {
    public url = environment.url;
    public doctorApproves$: Observable<any> = new Observable<any>();
    // public doctorApproves = [];
    constructor(private doctorService: DoctorsService) {
    }
    ngOnInit() {
        this.getListDoctorApprove()
    }

    getListDoctorApprove() {
        this.doctorApproves$ =  this.doctorService.getListDoctorApprove().pipe(
            map(response => response.data)
        )
    }

}

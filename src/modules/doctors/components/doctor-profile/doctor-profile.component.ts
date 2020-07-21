import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from '@modules/doctors/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sb-doctor-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['doctor-profile.component.scss'],
})
export class DoctorProfileComponent implements OnInit {
    public doctorId: number;
    public url = environment.url;
    // public doctorDetail$: Observable<any> = new Observable<any>();
    public doctorDetail = {};
    constructor(private doctorService: DoctorsService, private router: ActivatedRoute) {
        this.doctorId =  Number(this.router.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
        this.getDetailDoctor(this.doctorId)
    }

    getDetailDoctor(doctorId: number) {
        this.doctorService.getDetailDoctor(doctorId).subscribe(response => {
            this.doctorDetail = response.data
        })
   }
}


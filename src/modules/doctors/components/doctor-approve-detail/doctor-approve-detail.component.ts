import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { OrdersService } from '@modules/orders/services';
import { DoctorsService } from '@modules/doctors/services';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-doctor-approve-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './doctor-approve-detail.component.html',
    styleUrls: ['doctor-approve-detail.component.scss'],
})
export class DoctorApproveDetailComponent implements OnInit {
    public doctorApproveId: number;
    public doctorApproveDetail = {};
    public url = environment.url;

    constructor(private doctorService: DoctorsService, private routerAct: ActivatedRoute, private router: Router) {
        this.doctorApproveId =  Number(this.routerAct.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
       this.getDetailDoctorApprove(this.doctorApproveId)
    }

    getDetailDoctorApprove(doctorApproveId: number) {
        this.doctorService.getDetailDoctor(doctorApproveId).subscribe(response => {
            this.doctorApproveDetail = response.data
        })
    }

    submitApprove(doctorApproveId: number) {
        this.doctorService.approveDoctor(doctorApproveId).subscribe(response => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Approved new doctor successfully`,
                showConfirmButton: false,
                timer: 1000
                })
            this.router.navigate(['/doctors/approve'])
        })
    }
}

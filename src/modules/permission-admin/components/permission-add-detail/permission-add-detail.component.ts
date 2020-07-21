import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PermissionService } from '@common/services';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-permission-add-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-add-detail.component.html',
    styleUrls: ['permission-add-detail.component.scss'],
})
export class PermissionAddDetailComponent implements OnInit {
    public nonePermissions$: any;
    public userId: number;
    public permissionIds: Array<number> = [];
    
    constructor(private permissionService: PermissionService, private router: Router, private routerAct: ActivatedRoute) {
        this.userId =  Number(this.routerAct.snapshot.paramMap.get('id'));
    }


    ngOnInit() {
        this.getListNonePermissionsById(this.userId)
    }

    getListNonePermissionsById(userId: number) {
        this.nonePermissions$ = this.permissionService.getListNonePermissionsById(userId).pipe(
            map(response => response.data))
    }

    submitChange() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, save change',
            cancelButtonText: 'No, cancel',
            reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    this.submitChangePermissionByUser();
                } else if ( result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate([`/permission-admin/add/${this.userId}`]);
                }
            })     
    }

    submitChangePermissionByUser() {
        this.permissionService.submitChangePermissionById(this.userId, this.permissionIds).subscribe(
            response => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Submit change adminId ${this.userId} successfully`,
                    showConfirmButton: false,
                    timer: 1000
                  })
                this.router.navigate(['/permission-admin'])
            });
    }

    onChange(id:number, isChecked: boolean) {
        if(isChecked) {
          this.permissionIds.push(id);
        } else {
          let index = this.permissionIds.indexOf(id);
          this.permissionIds.splice(index,1);
        }
    }
}

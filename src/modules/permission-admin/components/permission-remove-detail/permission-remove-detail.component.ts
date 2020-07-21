import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from '@common/services';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-permission-remove-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-remove-detail.component.html',
    styleUrls: ['permission-remove-detail.component.scss'],
})
export class PermissionRemoveDetailComponent implements OnInit {
    public permissions$: any;
    public nonePermissionIds: Array<number> = [];
    public userId: number;
    constructor(private permissionService: PermissionService, private router: Router, private routerAct: ActivatedRoute) {
        this.userId =  Number(this.routerAct.snapshot.paramMap.get('id'));

    }

    ngOnInit() {
        this.getListPermissionsById(this.userId)
    }

    getListPermissionsById(userId: number) {
        this.permissions$ = this.permissionService.getListPermissionsById(userId).pipe(
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
                    this.deletePermissionById();
                } else if ( result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate([`/permission-admin/remove/${this.userId}`]);
                }
            })
    }

    deletePermissionById() {
        this.permissionService.deletePermissionById(this.userId, this.nonePermissionIds).subscribe(
            response => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Submit change successfully`,
                    showConfirmButton: false,
                    timer: 1000
                  })
                this.router.navigate(['/permission-admin']);
            })
    }

    onChange(id:number, isChecked: boolean) {
        if(isChecked) {
          this.nonePermissionIds.push(id);
        } else {
          let index = this.nonePermissionIds.indexOf(id);
          this.nonePermissionIds.splice(index,1);
        }
    }
}

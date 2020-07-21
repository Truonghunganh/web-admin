import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { PermissionService } from '@common/services';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-permission-remove-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-remove-all.component.html',
    styleUrls: ['permission-remove-all.component.scss'],
})
export class PermissionRemoveAllComponent implements OnInit {
    public permissions$: any;
    // public permissions =  [];
    public nonePermissionIds: Array<number> = [];
    
    constructor(private permissionService: PermissionService, private router: Router) {}


    ngOnInit() {
        this.getListPermissions()
    }

    getListPermissions() {
        this.permissions$ = this.permissionService.getListPermissionsByRole('admin').pipe(
            map(response => response.data))
    }

    deletePermission() {
        this.permissionService.deletePermission('admin', this.nonePermissionIds).subscribe(
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
                    this.deletePermission();
                } else if ( result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate(['/permission-admin/remove']);
                }
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

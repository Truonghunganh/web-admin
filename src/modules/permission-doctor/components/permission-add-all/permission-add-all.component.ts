import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PermissionService } from '@common/services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-permission-add-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permission-add-all.component.html',
    styleUrls: ['permission-add-all.component.scss'],
})
export class PermissionAddAllComponent implements OnInit {
    public nonePermissions$: any;
    public permissionIds: Array<number> = [];
    
    constructor(private permissionService: PermissionService, private router: Router) {}


    ngOnInit() {
        this.getListNonePermissions()
    }

    getListNonePermissions() {
        this.nonePermissions$ = this.permissionService.getListNonePermissionsByRole('doctor').pipe(
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
                    this.submitChangePermission();
                } else if ( result.dismiss === Swal.DismissReason.cancel) {
                    this.router.navigate(['/permission-doctor/add']);
                }
            })
    }

    submitChangePermission() {
        this.permissionService.submitChangePermission('doctor', this.permissionIds).subscribe(
            response => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Submit change successfully`,
                    showConfirmButton: false,
                    timer: 1000
                  })
                this.router.navigate(['/permission-doctor']);
            })
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

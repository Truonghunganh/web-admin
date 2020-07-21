import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NotificationsService } from '@modules/notifications/services';
import { NotificationCustom } from '@modules/notifications/models';
import Swal from 'sweetalert2';

@Component({
    selector: 'sb-notification-push',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './notification-push.component.html',
    styleUrls: ['notification-push.component.scss'],
})
export class NotificationPushComponent implements OnInit {
    public USER_TYPES = ['All', 'Doctor', 'Customer']
    pushForm: FormGroup = new FormGroup({
        title: new FormControl(),
        message: new FormControl(),
        type: new FormControl(),
    })
    constructor(private formBuilder: FormBuilder, private notificationsService: NotificationsService) {}
    ngOnInit() {}

    get f() { return this.pushForm.controls; }

    pushNotification(title:string, message:string, type:string) {
        const newNotification = new NotificationCustom(this.f.title.value, this.f.message.value, this.f.type.value)
        this.notificationsService.pushNotification(newNotification).subscribe(response =>{
            if (response.data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Push notification for ${this.f.type.value}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                this.pushForm.reset()
            }
        })
    }
}

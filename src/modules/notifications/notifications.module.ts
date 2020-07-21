/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as notificationsComponents from './components';

/* Containers */
import * as notificationsContainers from './containers';

/* Guards */
import * as notificationsGuards from './guards';

/* Services */
import * as notificationsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...notificationsServices.services, ...notificationsGuards.guards],
    declarations: [...notificationsContainers.containers, ...notificationsComponents.components],
    exports: [...notificationsContainers.containers, ...notificationsComponents.components],
})
export class NotificationsModule {}

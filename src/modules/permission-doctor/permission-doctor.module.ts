/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionDoctorComponents from './components';

/* Containers */
import * as permissionDoctorContainers from './containers';

/* Guards */
import * as permissionDoctorGuards from './guards';

/* Services */
import * as permissionDoctorServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...permissionDoctorServices.services, ...permissionDoctorGuards.guards],
    declarations: [...permissionDoctorContainers.containers, ...permissionDoctorComponents.components],
    exports: [...permissionDoctorContainers.containers, ...permissionDoctorComponents.components],
})
export class PermissionDoctorModule {}

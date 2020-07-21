/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionCustomerComponents from './components';

/* Containers */
import * as permissionCustomerContainers from './containers';

/* Guards */
import * as permissionCustomerGuards from './guards';

/* Services */
import * as permissionCustomerServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...permissionCustomerServices.services, ...permissionCustomerGuards.guards],
    declarations: [...permissionCustomerContainers.containers, ...permissionCustomerComponents.components],
    exports: [...permissionCustomerContainers.containers, ...permissionCustomerComponents.components],
})
export class PermissionCustomerModule {}

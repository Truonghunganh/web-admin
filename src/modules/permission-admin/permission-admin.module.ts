/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionAdminComponents from './components';

/* Containers */
import * as permissionAdminContainers from './containers';

/* Guards */
import * as permissionAdminGuards from './guards';

/* Services */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [ ...permissionAdminGuards.guards],
    declarations: [...permissionAdminContainers.containers, ...permissionAdminComponents.components],
    exports: [...permissionAdminContainers.containers, ...permissionAdminComponents.components],
})
export class PermissionAdminModule {}

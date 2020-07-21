/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionCustomerModule } from './permission-customer.module';

/* Containers */
import * as permissionCustomerContainers from './containers';

/* Guards */
import * as permissionCustomerGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: permissionCustomerContainers.ListComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: permissionCustomerContainers.AddAllComponent,
        data: {
            title: 'Add all new permissions',
        }  as SBRouteData,
    },
    {
        path: 'add/:id',
        canActivate: [],
        component: permissionCustomerContainers.AddDetailComponent,
        data: {
            title: 'Add new permissions a admin',
        }  as SBRouteData,
    },
    {
        path: 'remove',
        canActivate: [],
        component: permissionCustomerContainers.RemoveAllComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
    {
        path: 'remove/:id',
        canActivate: [],
        component: permissionCustomerContainers.RemoveDetailComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionCustomerModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionCustomerRoutingModule {}

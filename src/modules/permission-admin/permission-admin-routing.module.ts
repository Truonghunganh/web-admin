/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionAdminModule } from './permission-admin.module';

/* Containers */
import * as permissionAdminContainers from './containers';

/* Guards */
import * as permissionAdminGuards from './guards';
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
        component: permissionAdminContainers.ListComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: permissionAdminContainers.AddAllComponent,
        data: {
            title: 'Add all new permissions',
        }  as SBRouteData,
    },
    {
        path: 'add/:id',
        canActivate: [],
        component: permissionAdminContainers.AddDetailComponent,
        data: {
            title: 'Add new permissions a admin',
        }  as SBRouteData,
    },
    {
        path: 'remove',
        canActivate: [],
        component: permissionAdminContainers.RemoveAllComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
    {
        path: 'remove/:id',
        canActivate: [],
        component: permissionAdminContainers.RemoveDetailComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionAdminModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionAdminRoutingModule {}

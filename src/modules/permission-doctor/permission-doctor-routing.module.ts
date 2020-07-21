/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionDoctorModule } from './permission-doctor.module';

/* Containers */
import * as permissionDoctorContainers from './containers';

/* Guards */
import * as permissionDoctorGuards from './guards';
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
        component: permissionDoctorContainers.ListComponent,
        data: {
            title: 'List Permissions',
        }  as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: permissionDoctorContainers.AddAllComponent,
        data: {
            title: 'Add all new permissions',
        }  as SBRouteData,
    },
    {
        path: 'add/:id',
        canActivate: [],
        component: permissionDoctorContainers.AddDetailComponent,
        data: {
            title: 'Add new permissions a doctor',
        }  as SBRouteData,
    },
    {
        path: 'remove',
        canActivate: [],
        component: permissionDoctorContainers.RemoveAllComponent,
        data: {
            title: 'Remove perrmiison all doctor',
        }  as SBRouteData,
    },
    {
        path: 'remove/:id',
        canActivate: [],
        component: permissionDoctorContainers.RemoveDetailComponent,
        data: {
            title: 'Remove perrmiison a doctor',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionDoctorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionDoctorRoutingModule {}

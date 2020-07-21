/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { DoctorsModule } from './doctors.module';

/* Containers */
import * as doctorsContainers from './containers';

/* Guards */
import * as doctorsGuards from './guards';
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
        component: doctorsContainers.ListComponent,
        data: {
            title: 'List Doctor',
        }  as SBRouteData,
    },
    {
        path: 'detail/:id',
        canActivate: [],
        component: doctorsContainers.DetailComponent,
        data: {
            title: 'Detail Doctor',
        }  as SBRouteData,
    },
    {
        path: 'approve',
        canActivate: [],
        component: doctorsContainers.ApproveComponent,
        data: {
            title: 'Approve Doctor',
        }  as SBRouteData,
    },
    {
        path: 'approve-detail/:id',
        canActivate: [],
        component: doctorsContainers.ApproveDetailComponent,
        data: {
            title: 'Approve Doctor Detail',
        }  as SBRouteData,
    }
];

@NgModule({
    imports: [DoctorsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DoctorsRoutingModule {}

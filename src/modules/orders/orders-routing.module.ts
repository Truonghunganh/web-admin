/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { OrdersModule } from './orders.module';

/* Containers */
import * as ordersContainers from './containers';

/* Guards */
import * as ordersGuards from './guards';
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
        component: ordersContainers.ListComponent,
        data: {
            title: 'List Order',
        }  as SBRouteData,
    },
    {
        path: 'detail/:id',
        canActivate: [],
        component: ordersContainers.DetailComponent,
        data: {
            title: 'Detail Doctor',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [OrdersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {}

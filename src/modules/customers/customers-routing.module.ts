import { SBRouteData } from '@modules/navigation/models';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CustomersModule } from './customers.module';

/* Containers */
import * as customersContainers from './containers';

/* Guards */
import * as customersGuards from './guards';

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
        component: customersContainers.ListComponent,
        data: {
            title: 'List Customer',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [CustomersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CustomersRoutingModule {}

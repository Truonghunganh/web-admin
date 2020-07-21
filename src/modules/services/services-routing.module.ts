/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ServicesModule } from './services.module';

/* Containers */
import * as servicesContainers from './containers';

/* Guards */
import * as servicesGuards from './guards';
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
        component: servicesContainers.ListComponent,
        data: {
            title: 'List Services',
        }  as SBRouteData,
    },
    {
        path: 'list/:id',
        canActivate: [],
        component: servicesContainers.ListComponent,
        data: {
            title: 'List Services',
        }  as SBRouteData,
    },
   
    {
        path: 'add/:categoryId/:categoryName',
        canActivate: [],
        component: servicesContainers.AddComponent,
        data: {
            title: 'Add Service',
        }  as SBRouteData,
    },
      
    {
        path: 'update/:categoryId/:serviceId',
        canActivate: [],
        component: servicesContainers.UpdateComponent,
        data: {
            title: 'Update Service',
        }  as SBRouteData,
    }
];

@NgModule({
    imports: [ServicesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ServicesRoutingModule {}

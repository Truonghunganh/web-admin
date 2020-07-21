/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CategoriesModule } from './categories.module';

/* Containers */
import * as categoriesContainers from './containers';

/* Guards */
import * as categoriesGuards from './guards';
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
        component: categoriesContainers.ListComponent,
        data: {
            title: 'List Categories',
        }  as SBRouteData,
    },
    {
        path: 'repair/:categoryId',
        canActivate: [],
        component: categoriesContainers.RepairComponent,
        
        data: {
            title: 'repair Categories',
        }  as SBRouteData,
    },

    {
        path: 'add',
        canActivate: [],
        component: categoriesContainers.AddComponent,
        data: {
            title: 'Add Categorie',
        }  as SBRouteData,
    }
      
];

@NgModule({
    imports: [CategoriesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}

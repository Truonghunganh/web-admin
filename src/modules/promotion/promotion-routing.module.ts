import { SBRouteData } from '@modules/navigation/models';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PromotionModule } from './promotion.module';

/* Containers */
import * as promotionContainers from './containers';

/* Guards */
import * as promotionGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: promotionContainers.PromotionComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: promotionContainers.ListComponent,
        data: {
            title: 'List Promotion',
        }  as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: promotionContainers.AddComponent,
        data: {
            title: 'Add Promotion',
        }  as SBRouteData,
    },
    
];

@NgModule({
    imports: [PromotionModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PromotionRoutingModule {}

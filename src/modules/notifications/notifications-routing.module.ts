/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { NotificationsModule } from './notifications.module';

/* Containers */
import * as notificationsContainers from './containers';

/* Guards */
import * as notificationsGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [],
        component: notificationsContainers.PushComponent,
        data: {
            title: 'Push notifications',
        }  as SBRouteData,
    },
];

@NgModule({
    imports: [NotificationsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class NotificationsRoutingModule {}

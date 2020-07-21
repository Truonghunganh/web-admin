/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as ordersComponents from './components';

/* Containers */
import * as ordersContainers from './containers';

/* Guards */
import * as ordersGuards from './guards';

/* Services */
import * as ordersServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...ordersServices.services, ...ordersGuards.guards],
    declarations: [...ordersContainers.containers, ...ordersComponents.components],
    exports: [...ordersContainers.containers, ...ordersComponents.components],
})
export class OrdersModule {}

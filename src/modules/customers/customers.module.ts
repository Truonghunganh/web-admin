/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as customersComponents from './components';

/* Containers */
import * as customersContainers from './containers';

/* Guards */
import * as customersGuards from './guards';

/* Services */
import * as customersServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...customersServices.services, ...customersGuards.guards],
    declarations: [...customersContainers.containers, ...customersComponents.components],
    exports: [...customersContainers.containers, ...customersComponents.components],
})
export class CustomersModule {}

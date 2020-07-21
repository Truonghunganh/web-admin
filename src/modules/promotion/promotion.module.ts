/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as promotionComponents from './components';

/* Containers */
import * as promotionContainers from './containers';

/* Guards */
import * as promotionGuards from './guards';

/* Services */
import * as promotionServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...promotionServices.services, ...promotionGuards.guards],
    declarations: [...promotionContainers.containers, ...promotionComponents.components],
    exports: [...promotionContainers.containers, ...promotionComponents.components],
})
export class PromotionModule {}

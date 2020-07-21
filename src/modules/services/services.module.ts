/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as servicesComponents from './components';

/* Containers */
import * as servicesContainers from './containers';

/* Guards */
import * as servicesGuards from './guards';

/* Services */
import * as servicesServices from './services';

import { FilePondModule, registerPlugin } from 'ngx-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        FilePondModule
    ],
    providers: [...servicesServices.services, ...servicesGuards.guards],
    declarations: [...servicesContainers.containers, ...servicesComponents.components],
    exports: [...servicesContainers.containers, ...servicesComponents.components],
})
export class ServicesModule {}

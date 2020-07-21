/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as categoriesComponents from './components';

/* Containers */
import * as categoriesContainers from './containers';

/* Guards */
import * as categoriesGuards from './guards';

/* Services */
import * as categoriesServices from './services';
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
    providers: [...categoriesServices.services, ...categoriesGuards.guards],
    declarations: [...categoriesContainers.containers, ...categoriesComponents.components],
    exports: [...categoriesContainers.containers, ...categoriesComponents.components],
})
export class CategoriesModule {}

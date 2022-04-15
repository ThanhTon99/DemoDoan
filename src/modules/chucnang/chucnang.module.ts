import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import * as chucnangComponents from './components';

import * as chucnangContainers from "./containers";

import * as chucnangGuards from "./guards";

import * as chucnangServices from './services';

import { CKEditorModule } from 'ckeditor4-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        CKEditorModule,
        Ng2SearchPipeModule,
    ],
    providers:[...chucnangServices.services, ...chucnangGuards.guards,],
    declarations:[...chucnangContainers.containers, ...chucnangComponents.components],
    exports:[...chucnangContainers.containers, chucnangComponents.components],

})

export class ChucnangModule {}
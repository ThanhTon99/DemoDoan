import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import * as vanbandenContainers from "./containers";
import * as vanbandenServices from "./Services";

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
    providers:[...vanbandenServices.services, ],
    declarations:[...vanbandenContainers.containers, ],
    exports:[...vanbandenContainers.containers,],

})

export class VanbandenModule {}
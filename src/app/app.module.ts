import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
    declarations: [	AppComponent,
        
   ],
   
    imports: [BrowserModule, AppRoutingModule, HttpClientModule,
        Ng2SearchPipeModule,CKEditorModule, AppCommonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

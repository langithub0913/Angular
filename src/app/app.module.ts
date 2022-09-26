import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CbTemplateListComponent } from './cb-template-list/cb-template-list.component';
import { CbTemplateUnbindEventComponent } from './cb-template-unbind-event/cb-template-unbind-event.component';
import { CbTemplateDetailsComponent } from './cb-template-details/cb-template-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CbTemplateListComponent },      
      { path: 'htmltemplates/:htmlTemplateId', component: CbTemplateDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CbTemplateListComponent,
    CbTemplateUnbindEventComponent,
    CbTemplateDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
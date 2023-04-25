import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AppBarModule,
  MenuModule,
  TabModule,
} from '@syncfusion/ej2-angular-navigations';
import { TabPageComponent } from './tab-page/tab-page.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    TabPageComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabModule,
    CommonModule,
    AppBarModule,
    ButtonModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PageOneComponent, PageTwoComponent, PageThreeComponent],
})
export class AppModule {}

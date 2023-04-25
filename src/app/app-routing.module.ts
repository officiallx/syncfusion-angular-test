import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPageComponent } from './tab-page/tab-page.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'developer', component: PageOneComponent },
  { path: 'Blog', component: PageTwoComponent },
  { path: 'Careers', component: PageThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

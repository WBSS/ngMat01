import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {MyNavbarComponent} from './my-navbar/my-navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {MyTableComponent} from './my-table/my-table.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MyDashboardComponent,
    MyTableComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

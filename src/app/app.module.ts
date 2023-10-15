import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Public/Auth/sign-up/sign-up.component';
import { DashboardComponent } from './Private/User/dashboard/dashboard.component';
import { NavbarComponent } from './Private/User/navbar/navbar.component';
import { SidebarComponent } from './Private/User/sidebar/sidebar.component';
import { FooterComponent } from './Private/User/footer/footer.component';
import { SigninComponent } from './Public/Auth/signin/signin.component';
import { ChangePasswordComponent } from './Public/Auth/change-password/change-password.component';
import { ResetPasswordComponent } from './Public/Auth/reset-password/reset-password.component';
import { DocumentsComponent } from './Private/User/documents/documents.component';
import { InvoicesComponent } from './Private/User/invoices/invoices.component';
import { QuotationsComponent } from './Private/User/quotations/quotations.component';
import { ResellersComponent } from './Private/User/resellers/resellers.component';
import { SubscriptionsComponent } from './Private/User/subscriptions/subscriptions.component';
import { ClientsComponent } from './Private/User/clients/clients.component';
import { LandingComponent } from './Public/landing/landing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastNoAnimationModule } from 'ngx-toastr';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SigninComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    DocumentsComponent,
    InvoicesComponent,
    QuotationsComponent,
    ResellersComponent,
    SubscriptionsComponent,
    ClientsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastNoAnimationModule.forRoot(),
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './Private/User/clients/clients.component';
import { DashboardComponent } from './Private/User/dashboard/dashboard.component';
import { DocumentsComponent } from './Private/User/documents/documents.component';
import { InvoicesComponent } from './Private/User/invoices/invoices.component';
import { QuotationsComponent } from './Private/User/quotations/quotations.component';
import { ResellersComponent } from './Private/User/resellers/resellers.component';
import { SubscriptionsComponent } from './Private/User/subscriptions/subscriptions.component';
import { SignUpComponent } from './Public/Auth/sign-up/sign-up.component';
import { SigninComponent } from './Public/Auth/signin/signin.component';
import { LandingComponent } from './Public/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'Signup' , component : SignUpComponent},
  {path: 'login' , component : SigninComponent},
  {path: 'Home', component: DashboardComponent },
  {path: 'Documents', component: DocumentsComponent},
  {path: 'Invoices', component: InvoicesComponent},
  {path: 'Quotations', component: QuotationsComponent},
  {path: 'Resellers', component: ResellersComponent},
  {path: 'Subscriptions', component: SubscriptionsComponent},
  {path: 'Clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

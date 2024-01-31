import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//toast
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { ContenuComponent } from './contenu/contenu.component';
import { ReclamationTraiteComponent } from './reclamation-traite/reclamation-traite.component';
import { ReclationRejeteComponent } from './reclation-rejete/reclation-rejete.component';
import { ReclamationAttenteComponent } from './reclamation-attente/reclamation-attente.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ReclamationsListComponent,
    EditReclamationComponent,
    StatCardComponent,
    ContenuComponent,
    ReclamationTraiteComponent,
    ReclationRejeteComponent,
    ReclamationAttenteComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule , 
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

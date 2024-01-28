import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { ContenuComponent } from './contenu/contenu.component';
import { HttpClientModule } from '@angular/common/http';
import { authService } from './service/login-service.service';
import { ReclamationTraiteComponent } from './reclamation-traite/reclamation-traite.component';
import { ReclationRejeteComponent } from './reclation-rejete/reclation-rejete.component';
import { ReclamationAttenteComponent } from './reclamation-attente/reclamation-attente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
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
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }














































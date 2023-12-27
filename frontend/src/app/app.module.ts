import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { ContenuComponent } from './contenu/contenu.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ReclamationsListComponent,
    EditReclamationComponent,
    StatCardComponent,
    ContenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

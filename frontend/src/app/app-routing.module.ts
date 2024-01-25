import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReclamationTraiteComponent } from './reclamation-traite/reclamation-traite.component';
import { ReclamationAttenteComponent } from './reclamation-attente/reclamation-attente.component';
import { ReclationRejeteComponent } from './reclation-rejete/reclation-rejete.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'reclamations', component: ReclamationsListComponent },
  { path: 'edit-reclamation/:id', component: EditReclamationComponent },
  { path: 'reclamationEnAttente', component: ReclamationAttenteComponent },
  { path: 'reclamationTraite', component: ReclamationTraiteComponent },
  { path: 'reclamationRejete', component: ReclationRejeteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

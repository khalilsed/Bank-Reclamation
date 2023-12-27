import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'reclamations', component: ReclamationsListComponent },
  { path: 'edit-reclamation/:id', component: EditReclamationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

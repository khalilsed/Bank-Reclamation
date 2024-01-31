import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Reclam } from '../reclamations-list/reclam';

@Component({
  selector: 'app-reclamation-attente',
  templateUrl: './reclamation-attente.component.html',
  styleUrls: ['./reclamation-attente.component.css']
})
export class ReclamationAttenteComponent implements OnInit{
  logoUrl = "assets/images/logo.png";
  logoutUrl = "assets/images/logout.png";

  reclamationsList : Reclam [] = [];

  constructor(private reclamationService : ReclamationService) {}
  ngOnInit(): void {
    console.log(1);
    
    this.reclamationService.getAllReclamAttente().subscribe((res) => {
      console.log(res);
      this.reclamationsList = res;
      console.log(this.reclamationsList,'reclamationsList');

    })

  }
}

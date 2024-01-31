import { Component, OnInit } from '@angular/core';
import { Reclam } from '../reclamations-list/reclam';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-reclamation-traite',
  templateUrl: './reclamation-traite.component.html',
  styleUrls: ['./reclamation-traite.component.css']
})
export class ReclamationTraiteComponent implements OnInit{
  logoUrl = "assets/images/logo.png";
  logoutUrl = "assets/images/logout.png";

  reclamationsList : Reclam[] = [];

  constructor(private reclamationService : ReclamationService) {}
  ngOnInit(): void {
    console.log(1);
    
    this.reclamationService.getAllReclamTraite().subscribe((res) => {
      console.log(res);
      this.reclamationsList = res;
      console.log(this.reclamationsList,'reclamationsList');

    })

  }
}

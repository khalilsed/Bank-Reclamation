import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Reclam } from '../reclamations-list/reclam';

@Component({
  selector: 'app-reclation-rejete',
  templateUrl: './reclation-rejete.component.html',
  styleUrls: ['./reclation-rejete.component.css']
})
export class ReclationRejeteComponent implements OnInit{
  logoUrl = "assets/images/logo.png";

  reclamationsList : Reclam [] = [];

  constructor(private reclamationService : ReclamationService) {}
  ngOnInit(): void {
    console.log(1);
    
    this.reclamationService.getAllReclamRejecte().subscribe((res) => {
      console.log(res);
      this.reclamationsList = res;
      console.log(this.reclamationsList,'reclamationsList');

    })

  }

}

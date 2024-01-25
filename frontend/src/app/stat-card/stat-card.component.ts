import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit{
//  document.getElementById(Trait).innerHTML()
nbrTraite = 0;
nbrRejte = 0;
nbrEnAttente = 0;
constructor(private reclamationService : ReclamationService) {}
ngOnInit(): void {
  this.reclamationService.getNbrReclamTraite().subscribe((res) => {
    console.log(res);
    this.nbrTraite = res.count;
  })

  this.reclamationService.getNbrReclamRejecte().subscribe((res) => {
    console.log(res);
    this.nbrRejte = res.count;
  })

  this.reclamationService.getNbrReclamAttente().subscribe((res) => {
    console.log(res);
    this.nbrEnAttente = res.count;
  })
}
}

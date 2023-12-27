import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-reclamations-list',
  templateUrl: './reclamations-list.component.html',
  styleUrls: ['./reclamations-list.component.css']
})
export class ReclamationsListComponent implements OnInit{

  imgPen="assets/images/pencil.png";
  iconAttente="assets/images/attente.png";
  iconTraite="assets/images/traité.png";
  iconReject="assets/images/reject.png";


  reclamationsList = [];
  reclamations = ["khalil","sed",52108635];

  constructor(private reclamationService : ReclamationService) {}
  ngOnInit(): void {
    this.reclamationService.getAllReclam().subscribe(
      result=>{
        this.reclamationsList = result
      },
      error=>{
        console.log(error);
      }
    )
  }
  }



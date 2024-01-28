import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../service/reclamation.service';
import { Reclam } from './reclam';
import { Router } from '@angular/router';

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

   reclamationsList : Reclam [] = [];
  reclamations = ["khalil","sed",52108635];

  constructor(private reclamationService : ReclamationService, private router: Router) {}
  ngOnInit(): void {
    // this.reclamationService.getAllReclam().subscribe(
    //   result=>{
    //     console.log('yesssssssssssssssssssssssssssssssss',result);
        
    //     this.reclamationsList = result
    //   },
    //   error=>{
    //     console.log(error);
    //   }
    // )
    console.log(1);
    
    this.reclamationService.getAllReclam().subscribe((res) => {
      console.log(res);
      this.reclamationsList = res;
      console.log(this.reclamationsList,'reclamationsList');

    })
    

  }
  // selectItem(id: String): void {
  //   this.router.navigate(['/edit-reclamation', id]);
  // }
  }
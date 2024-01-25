import { Component } from '@angular/core';
import { Reclam } from '../reclamations-list/reclam';
import { ReclamationService } from '../reclamation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent {
  logoUrl = "assets/images/logo.png";
  reclamationOne : Reclam ={};

  constructor(private reclamationService : ReclamationService, private route : ActivatedRoute) {}
  ngOnInit(): void {
    let idReclam = this.route.snapshot.params['id'] ;

    this.reclamationService.getOneReclam(idReclam).subscribe((res)  => {
      console.log(res);
      this.reclamationOne = res;
      console.log(this.reclamationOne,'reclamationsoneeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    })

  }


}

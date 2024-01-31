import { Component } from '@angular/core';
import { Reclam } from '../reclamations-list/reclam';
import { EditReclam } from './edit-reclam';
import { ReclamationService } from '../reclamation.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent {
  logoUrl = "assets/images/logo.png";
  logoutUrl = "assets/images/logout.png";


  reclamationOne : Reclam ={};
  updateReclam: FormGroup;
  reclamationId: string = ''; 

  constructor(private fb: FormBuilder,private reclamationService : ReclamationService, private route : ActivatedRoute, private router: Router,  private toastr: ToastrService) {
    let formControls = {
      nomClt:  new FormControl('',
      Validators.required,
      ),
    telClt: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]+"),
      Validators.minLength(8),
      Validators.maxLength(13)
    ]),
    emailClt: new FormControl('',[
      Validators.required,
      Validators.pattern("[A-Za-z .'-]+"),
      Validators.minLength(3)
    ]),
    
    description: new FormControl('',
    Validators.required,
    ), 
    status: new FormControl('',
    Validators.required,
    )}
    
    this.updateReclam = this.fb.group(formControls)
  }

  get nomClt() { return this.updateReclam.get('nomClt') };
  get emailClt() { return this.updateReclam.get('emailClt') }
  get telClt() { return this.updateReclam.get('telClt') }
  get description(){ return this.updateReclam.get('description')}
  get status(){ return this.updateReclam.get('status')}

  ngOnInit(): void {
    let idReclam = this.route.snapshot.params['id'] ;

    this.reclamationService.getOneReclam(idReclam).subscribe((res)  => {
      console.log(res);
      this.reclamationOne = res;
    })

  }

  updateReclamation() {
    let formData = this.updateReclam.value;
    let idReclam = this.route.snapshot.params['id'] ;
    let reclamation = new EditReclam (undefined,undefined,undefined,undefined,undefined,undefined,undefined,formData.status,undefined);

    this.reclamationService.updateReclam(idReclam,reclamation).subscribe(
      res=>{
        this.toastr.success('Réclamation modifiée avec succèes')
        this.router.navigate(['/home']);
      }
    )

  }


}

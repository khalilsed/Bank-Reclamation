import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Reclam } from '../reclamations-list/reclam';
import { ReclamationService } from '../service/reclamation.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit{
  logoUrl = "assets/images/logo.png";
  reclamationOne : Reclam ={};
  updateUserForm: FormGroup
  reclamationId: string = ''; 

  constructor(private fb: FormBuilder,private reclamationService : ReclamationService, private route : ActivatedRoute, private router: Router) {
    let formControls = {
      NomClt:  new FormControl('',
        Validators.required,
        ),
      telClt: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(3)
      ]),
      status: new FormControl('',
      Validators.required,
      ),
      description: new FormControl('',
      Validators.required,
      ), 
     
      
    }

    this.updateUserForm = this.fb.group(formControls)
  
  }
  get nomClt() { return this.updateUserForm.get('nomClt') };
  get emailClt() { return this.updateUserForm.get('emailClt') }
  get telClt() { return this.updateUserForm.get('telClt') }
  get description(){ return this.updateUserForm.get('description')}
  get status(){ return this.updateUserForm.get('status')}

  

  ngOnInit(): void {
  let   idReclam = this.route.snapshot.params['id'];
  this.reclamationService.getOneReclam(idReclam).subscribe(
        res=> {
          
          let reclamation = res;
          this.updateUserForm.patchValue({
            nomClt: reclamation.nomClt,
            telClt: reclamation.telClt,
            emailClt: reclamation.emailClt,
            status: reclamation.status,
            description: reclamation.description,
          });





  // this.loadReclamationData();

  })}
  // loadReclamationData(): void {
 
  // this.reclamationId = this.route.snapshot.params['id'];
    
  //   // Fetch the reclamation data using your service and populate the form
  //   this.reclamationService.getOneReclam(this.reclamationId).subscribe(
  //     (reclamation: any) => {
  //       this.updateUserForm.patchValue({
  //         nomClt: reclamation.nomClt,
  //         telClt: reclamation.telClt,
  //         email: reclamation.email,
  //         status: reclamation.status,
  //         description: reclamation.description,
  //       });
  //     }
     
  //   );
  //}


  updateUser() {
    console.log("bdiiiiiiiiiiiiiiiiiiiiiiiiiina")
    let formData = this.updateUserForm.value;
    console.log(formData, "dataaaaaaaaaaaaaaa");
    let idReclam = this.route.snapshot.params['id'] ;
    let reclamation = new Reclam (idReclam,formData.nomClt,0,formData.emailClt,formData.telClt,undefined,formData.description,formData.status,undefined);

 	
    console.log(idReclam,"idddddddddddddddddd");
    console.log(reclamation,"reclaaaaaaaaaaaaaaaaaaaaaaaaaame")

    this.reclamationService.updateReclam(idReclam,reclamation).subscribe(
      res=>{
        console.log("updaaaaaaaaaaaaaaaaaaaaaaaaaate")
        this.router.navigate(['/']);
      }
    )

  }

//   updateUser(): void {
//     if (this.updateUserForm.valid) {
//       const formData = this.updateUserForm.value;

//       // Prepare the reclamation object to be sent for update
//       const updatedReclamation = {
//         nomClt: formData.nomClt,
//         telClt: formData.telClt,
//         email: formData.email,
//         status: formData.status,
//         description: formData.description,
//       };
//         console.log(updatedReclamation,"reclaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam");
//       // Update the reclamation using your service
//       this.reclamationService.updateReclam(this.reclamationId, updatedReclamation).subscribe(
//         (response) => {
//           console.log("updateeeeeeeeeeeeeeeeeeeeeeeee");
//           console.log(response);
//           this.router.navigate(['/']); // Redirect after successful update
//         }
//       );
//     }
//   }
 }
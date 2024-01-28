import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclam } from '../reclamations-list/reclam';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private getReclamationsUrl = "http://localhost:3000/Reclamations";
  private getOneReclamationUrl = "http://localhost:3000/Reclamations/";
  private getReclamationTraiteUrl = "http://localhost:3000/ReclamationsTraite";
  private getNbrReclamationTraiteUrl = "http://localhost:3000/Reclamations/countTreated";
  private getReclamationRejecteUrl = "http://localhost:3000/ReclamationsRejete";
  private getNbrReclamationRejecteUrl = "http://localhost:3000/Reclamations/countRejected";
  private getReclamationAttenteUrl = "http://localhost:3000/ReclamationsEnAttente";
  private getNbrReclamationAttenteUrl = "http://localhost:3000/Reclamations/countAttente";
  private updateReclamUrl="http://localhost:3000/update/";


  constructor(private http: HttpClient) { } 

  getAllReclam(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getReclamationsUrl,header);
  }

  //reclamation traites
  getAllReclamTraite(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getReclamationTraiteUrl,header);
  }
  getNbrReclamTraite(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getNbrReclamationTraiteUrl,header);
  }

  //reclamation Rejecte
  getAllReclamRejecte(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getReclamationRejecteUrl,header);
  }
  getNbrReclamRejecte(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getNbrReclamationRejecteUrl,header);
  }

  //reclamation En Attente
  getAllReclamAttente(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getReclamationAttenteUrl,header);
  }
  getNbrReclamAttente(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getNbrReclamationAttenteUrl,header);
  }



  getOneReclam(id: String): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getOneReclamationUrl + id)
  }


 // updateReclam(id: string, updatedReclam: any): Observable<any> {
   // const url = `${this.updateReclamUrl}/${id}`;
    
    //return this.http.put<any>(url, updatedReclam);
  //}

  
  updateReclam(id: String, reclamation:any){
    var header = { headers: new HttpHeaders() }
    return this.http.put<any>(this.updateReclamUrl + id, reclamation);
  }
}
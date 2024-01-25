import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private getReclamationsUrl = "http://localhost:3000/Reclamations";
  private getOneReclamationUrl = "http://localhost:3000/Reclamations/";

  constructor(private http: HttpClient) { } 

  getAllReclam() {
    return this.http.get<any>(this.getReclamationsUrl);
  }

  getOneReclam(id: String) {
    return this.http.get<any>(this.getOneReclamationUrl + id)
  }
}

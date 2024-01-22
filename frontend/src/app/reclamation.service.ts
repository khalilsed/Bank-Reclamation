import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private getReclamationsUrl = "http://localhost:3000/Reclamations";
  private getOneReclamationUrl = "http://localhost:3000/Reclamations/";

  constructor(private http: HttpClient) { } 

  getAllReclam(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getReclamationsUrl,header);
  }

  getOneReclam(id: String) {
    return this.http.get<any>(this.getOneReclamationUrl + id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheet } from './sheet';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private http: HttpClient) { }

  getFiches(): Observable<Sheet[]> {
    var fiches = this.http.get<Sheet[]>("http://localhost:8000/api/sheets");
    fiches.subscribe((response)=>{
      console.log(response);
    });
    return fiches;
  }

  getFiche(id: number): Observable<Sheet> {
    return this.http.get<Sheet>(`http://localhost:8000/api/sheet/${id}`);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Anillo } from '../models/anillo';
import { environment } from '../../environments/environment';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnilloService {

  public anillo: Anillo;

  info:any = {};
  cargada:boolean = false;


  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('auth_token') || '';
  }


  get headers(){
    return{
      headers: {
        'auth_token': this.token
      }
    }
  }

  get status(): 'PUBLISHED' | 'PENDING' | 'REJECTED' {
    return this.anillo.status!;
  }


  getAnillos()  {
    const url = `${baseUrl}/anillos`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, anillos: Anillo}) => resp.anillos)
      )
  }

  getAnillo(id: number) {
    const url = `${baseUrl}/anillo/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, anillo: Anillo}) => resp.anillo)
        );
  }

}

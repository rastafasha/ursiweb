import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Escuela } from '../models/escuela';
import { environment } from '../../environments/environment';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  public galleryschool: Escuela;

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
    return this.galleryschool.status!;
  }


  getEscuelas()  {
    const url = `${baseUrl}/galleryschools`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, galleryschools: Escuela}) => resp.galleryschools)
      )
  }

  getEscuela(id: number) {
    const url = `${baseUrl}/galleryschool/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, galleryschool: Escuela}) => resp.galleryschool)
        );
  }


}

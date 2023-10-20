import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Publicacion } from '../models/publicacion';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  public publicacion: Publicacion;

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
    return this.publicacion.status!;
  }


  getPublicacions()  {
    const url = `${baseUrl}/publicacions`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, publicaciones: Publicacion}) => resp.publicaciones)
      )
  }

  getPublicacion(id: number) {
    const url = `${baseUrl}/publicacion/show/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, publicacion: Publicacion}) => resp.publicacion)
        );
  }


}

import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Curso;
  cursosActivos: Curso;

  constructor(
    private http: HttpClient
  ) { }

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

  // getProducts(): Curso[]{
  //   return this.products;
  // }

  getCursos()  {
    const url = `${baseUrl}/cursos`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, cursos: Curso}) => resp.cursos)
      )
  }

  getCursosActivos()  {
    const url = `${baseUrl}/cursos/activos`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, cursos: Curso}) => resp.cursos)
      )
  }
  getCursosDestacados()  {
    const url = `${baseUrl}/cursos/destacados`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, cursos: Curso}) => resp.cursos)
      )
  }

  getCurso(id: number) {
    const url = `${baseUrl}/curso/show/${id}`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, curso: Curso}) => resp.curso)
        );
  }

  getCursoBySlug(slug: Curso) {
    const url = `${baseUrl}/curso/show/slug/${slug}`;
    return this.http.get<any>(url)
      .pipe(
        map((resp:{ok: boolean, curso: Curso}) => resp.curso)
        );
  }

  search(query=''){
    return this.http.get(`${baseUrl}/curso/search`, {params: {buscar: query}})

  }

}

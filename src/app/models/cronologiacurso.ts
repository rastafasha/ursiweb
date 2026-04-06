import { environment } from "../../environments/environment";

const base_url = environment.apiUrlMedia;
export class Cronologiacurso {
  id: number;
  modo: string;
  title: string;
  description: string;
  fecha: string;
  hora: string;
  clases: string;
  proyecto: string;
  duracion: string;
  modo_eng: string;
  title_eng: string;
  description_eng: string;
  fecha_eng: string;
  hora_eng: string;
  clases_eng: string;
  proyecto_eng: string;
  duracion_eng: string;
  costo: string;
  image: string = "";
    avatar: string = "";
  created_at?: any;
  updated_at?: any;
  status?: 'PUBLISHED' | 'PENDING' | 'REJECTED';

  get imagenUrl(){

     if(!this.image){
      return `${base_url}no-image.png`;
    } else if(this.image.includes('https')){
      return this.image;
    } else if(this.image){
      return `${base_url}aretes/${this.image}`;
    }else {
      // return `${base_url}/no-image.png`;
      return `./assets/img/no-image.jpg`;
    }

  }
}

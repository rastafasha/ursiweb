import { environment } from "src/environments/environment";
const base_url = environment.apiUrlMedia;

export class Dije {
  id: number;
  user_id: number;
  title: string;
  model: any;
  description: string;
  price: any;
  image: string;
  created_at: string;
  updated_at: string;
  status?: 'PUBLISHED' | 'PENDING' | 'REJECTED';



  get imagenUrl(){

    if(!this.image){
      return `${base_url}dijes/no-image.jpg`;
    } else if(this.image.includes('https')){
      return this.image;
    } else if(this.image){
      return `${base_url}dijes/${this.image}`;
    }else {
      return `${base_url}/no-image.jpg`;
      // return `./assets/img/no-image.jpg`;
    }

  }

}

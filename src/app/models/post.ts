import { environment } from "src/environments/environment";
import { Category } from './category';
const base_url = environment.apiUrlMedia;
export class Post {

  id: number;
  category_id: Category;
  user_id: number;
  title?: string = "";
  description: string = "";
  title_eng?: string = "";
  description_eng: string = "";
  slug: string = "";
  is_featured: boolean;
  status?: 'PUBLISHED' | 'PENDING' | 'REJECTED';
  image: string = "";
    avatar: string = "";
  name: Category;
  name_eng: Category;
  created_at?: any;
  updated_at?: any;




  // public get isActive():boolean{
  //     return (this.is_active === 1 ? true: false);
  // }


  get imagenUrl(){

    if(!this.image){
      return `${base_url}no-image.png`;
    } else if(this.image.includes('https')){
      return this.image;
    } else if(this.image){
      return `${base_url}${this.image}`;
    }else {
      // return `${base_url}no-image.jpg`;
      return `./assets/images/no-image.jpg`;
    }

  }
}

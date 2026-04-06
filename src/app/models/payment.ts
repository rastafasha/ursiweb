import { environment } from "../../environments/environment";
import { Curso } from "./curso";
import { User } from "./user";

const base_url = environment.apiUrlMedia;

export class Payment {
  curso_id?:Curso;
   id:number;
   email:string;
   monto:string;
   name:string;
   nombre:string;
   referencia:string;
   user_id?:User;
   updated_at:Date;
   created_at:Date;


}

import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { User } from 'src/app/models/user';
import { CursosService } from 'src/app/services/cursos.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cursos-de-orfebreria',
  templateUrl: './cursos-de-orfebreria.component.html',
  styleUrls: ['./cursos-de-orfebreria.component.css']
})
export class CursosDeOrfebreriaComponent implements OnInit {
  
  error: string;
  public user: User;
  id:number;
  p: number = 1;
  count: number = 8;
  cursos: any;

  query:string ='';



  constructor(
    private cursoService: CursosService,
    private messageService: MessageService,
    private userService: UserService,
    private router: Router,
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    this.loadCursos();
    window.scrollTo(0, 0);
    this.getUser();
    this.getUserServer();
    
  }



  gotoLogin(){
    this.router.navigateByUrl('/login');
  }


  loadCursos(){
    this.cursoService.getCursosActivos().subscribe(
      res =>{
        this.cursos = res;
        error => this.error = error
        // console.log(this.cursos);
      }
    );
  }

  getUserServer(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.id == null){
      this.id = 0;
    }else{
      // this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user.id;
    }
    // console.log(this.user.id);

  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user.id;

    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.id == null){
      this.id = 0;
    }
    console.log(this.user.id);

  }

  

  search() {
    return this.cursoService.search(this.query).subscribe(
      res=>{
        this.cursos = res;
        if(!this.query){
          this.ngOnInit();
        }
      });
  }



}

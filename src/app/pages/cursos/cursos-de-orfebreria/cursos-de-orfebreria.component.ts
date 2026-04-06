import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../../models/curso';
import { User } from '../../../models/user';
import { CursosService } from '../../../services/cursos.service';
import { MessageService } from '../../../services/message.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-cursos-de-orfebreria',
    templateUrl: './cursos-de-orfebreria.component.html',
    styleUrls: ['./cursos-de-orfebreria.component.css'],
    standalone: false
})
export class CursosDeOrfebreriaComponent implements OnInit {
  
  isLoading: boolean = false;
  error: string;
  public user: User;
  id:number;
  p: number = 1;
  count: number = 8;
  cursos: any;

  query:string ='';

  isEdnOfList = false;

  selectedProduct: Curso = null; // Added: Store selected product for modal



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
    
    // Subscribe to receive selected product for modal from product-item
    this.messageService.getModalMessage().subscribe((product: Curso) => {
      this.selectedProduct = product;
    });
    
  }

  // Method to clear selected product when modal is closed
  onModalClose(): void {
    this.selectedProduct = null;
  }



  gotoLogin(){
    this.router.navigateByUrl('/login');
  }


  loadCursos(){
    this.isLoading = true;
    this.cursoService.getCursosActivos().subscribe(
      (res:any) =>{
        this.cursos = res;
        error => this.error = error
        this.isLoading = false;
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
    // console.log(this.user.id);

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

  // onScrollDown(){
  //   if (!this.nextUrl || this.isLoading) return;
  //   this.favoriteService.getCharacters(this.nextUrl).subscribe({
  //     next: (resp: any) => {
  //       if (resp.info.next) {
  //         this.nextUrl = resp.info.next;
  //         this.characters = [...this.characters, ...resp.results];
  //       } else {
  //         this.isEdnOfList = true;
  //         this.loadingTitle = 'No hay más personajes para mostrar';
  //         alert('ultima pagina');
  //       }
  //     },
  //     error: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }





}

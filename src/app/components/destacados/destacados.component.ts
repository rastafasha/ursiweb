import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Curso } from '../../models/curso';
import { CursosService } from '../../services/cursos.service';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-destacados',
    templateUrl: './destacados.component.html',
    styleUrls: ['./destacados.component.css'],
    standalone: false
})
export class DestacadosComponent implements OnInit{
  isLoading: boolean = false;
  cursos: Curso;
  error:string;
  selectedProduct: Curso = null;

  curso:any;

  constructor(
    public cursoService: CursosService,
    public translate: TranslateService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPosts();
  }

  getPosts(): void {
    this.isLoading = true;
    this.cursoService.getCursosDestacados().subscribe(
      res =>{
        this.cursos = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );

  }

   openModal(curso:Curso): void {
    // Send the product to the parent component for modal display (separate from cart)
    this.selectedProduct = curso
    console.log(curso)
    this.messageService.sendModalProduct(this.selectedProduct);
  }
}

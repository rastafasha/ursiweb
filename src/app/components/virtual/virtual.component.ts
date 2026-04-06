import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import { Curso } from '../../models/curso';
import { User } from '../../models/user';
import { CursosService } from '../../services/cursos.service';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-virtual',
    templateUrl: './virtual.component.html',
    styleUrls: ['./virtual.component.css'],
    standalone: false
})
export class VirtualComponent implements OnInit {

  //se el viewchil para buscar el elemento
  @ViewChild(CdkVirtualScrollViewport) viewportList: CdkVirtualScrollViewport;

  @Input() product: Curso;
  // personas = Array(500).fill(0);

  cursos: any;
  error: string;
  query:string ='';
  public user: User;

  constructor(
    private cursoService: CursosService,
    private messageService: MessageService,
    private userService: UserService,
  ) { 
    this.user = userService.user;
  }

  ngOnInit(): void {
    this.loadCursos();
    // console.log(this.personas);
    
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

  addToCart(): void{
    // console.log('sending...')
    this.messageService.sendMessage(this.product);
  }

  // irFinal(){
  //   this.viewportList.scrollToIndex( this.cursos.length);
  // }
  // irInicio(){
  //   this.viewportList.scrollToIndex(0);
  // }
  // irMitad(){
  //   this.viewportList.scrollToIndex(this.cursos.length / 2);
  // }


}

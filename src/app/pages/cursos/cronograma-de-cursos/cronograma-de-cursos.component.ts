import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cronologiacurso } from 'src/app/models/cronologiacurso';
import { CronologiacursosService } from 'src/app/services/cronologiacursos.service';

@Component({
  selector: 'app-cronograma-de-cursos',
  templateUrl: './cronograma-de-cursos.component.html',
  styleUrls: ['./cronograma-de-cursos.component.css']
})
export class CronogramaDeCursosComponent implements OnInit{

  isLoading: boolean = false;
  cronologiacursos: Cronologiacurso;
  error:string;

  constructor(
    public cronogramaService: CronologiacursosService,
    public translate: TranslateService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getCronogramas();
  }

  getCronogramas(): void {
    this.isLoading = true;
    this.cronogramaService.getCursosActivos().subscribe(
      res =>{
        this.cronologiacursos = res;
        error => this.error = error
        this.isLoading = false;
        // console.log(this.cronologiacursos);
      }
    );
  }

}

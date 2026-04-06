import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Herramienta } from '../../../models/herramienta';
import { HerramientaService } from '../../../services/herramienta.service';
@Component({
    selector: 'app-herramientas',
    templateUrl: './herramientas.component.html',
    styleUrls: ['./herramientas.component.css'],
    standalone: false
})
export class HerramientasComponent implements OnInit {

  isLoading = false;
  herramientas: Herramienta;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private herramientaService: HerramientaService,
    handler: HttpBackend,
    public translate: TranslateService
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {
    this.isLoading = true;
    this.herramientaService.getHerramientas().subscribe(
      (res:any) =>{
        this.herramientas = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );
  }


}

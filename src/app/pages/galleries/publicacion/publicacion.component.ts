import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Publicacion } from '../../../models/publicacion';
import { PublicacionService } from '../../../services/publicacion.service';
@Component({
    selector: 'app-publicacion',
    templateUrl: './publicacion.component.html',
    styleUrls: ['./publicacion.component.css'],
    standalone: false
})
export class PublicacionComponent implements OnInit {

  isLoading = false;
  media = environment.apiUrlMedia;
  publicaciones: Publicacion;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private publicacionService: PublicacionService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {
    this.isLoading = true;
    this.publicacionService.getPublicacions().subscribe(
      res =>{
        this.publicaciones = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );
  }
}

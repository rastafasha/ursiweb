import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Escuela } from '../../../models/escuela';
import { EscuelaService } from '../../../services/escuela.service';

@Component({
    selector: 'app-escuela',
    templateUrl: './escuela.component.html',
    styleUrls: ['./escuela.component.css'],
    standalone: false
})
export class EscuelaComponent implements OnInit {

  isLoading = false;
  escuelas: Escuela;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private escuelaService: EscuelaService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {
    this.isLoading = true;
    this.escuelaService.getEscuelas().subscribe(
      res =>{
        this.escuelas = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );
  }
}

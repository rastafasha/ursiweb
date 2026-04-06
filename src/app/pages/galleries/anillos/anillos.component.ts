import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Anillo } from '../../../models/anillo';
import { AnilloService } from '../../../services/anillo.service';

@Component({
    selector: 'app-anillos',
    templateUrl: './anillos.component.html',
    styleUrls: ['./anillos.component.css'],
    standalone: false
})
export class AnillosComponent implements OnInit {

  isLoading = false;
  anillos: Anillo;
  error: string;
  msm_error: string;
  loading = false;

  constructor(
    private anilloService: AnilloService,
    handler: HttpBackend
  ) {
   }

  ngOnInit(): void {
    this.getServicios();
    window.scrollTo(0,0);
  }

  getServicios(): void {
    this.isLoading = true;
    this.anilloService.getAnillos().subscribe(
      res =>{
        this.anillos = res;
        error => this.error = error;
        this.isLoading = false;
      }
    );
  }
}

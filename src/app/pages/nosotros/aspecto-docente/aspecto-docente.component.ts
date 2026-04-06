import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aspecto-docente',
    templateUrl: './aspecto-docente.component.html',
    styleUrls: ['./aspecto-docente.component.css'],
    standalone: false
})
export class AspectoDocenteComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

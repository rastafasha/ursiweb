import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

// Declare jQuery as any to avoid TypeScript errors
declare var jQuery: any;


@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit, OnChanges{

  @Input() product: Curso; // Receive selected product from parent
  products: Curso;
  curso: Curso;
  error: string;


  constructor(
    private cursoService: CursosService,
    private _sanitizer: DomSanitizer,
    public translate: TranslateService
    ) { }

  ngOnInit() {
    // If no product is passed as input, load all courses (fallback)
    if (!this.product) {
      this.loadCursos();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When product input changes, open the modal
    if (changes['product'] && changes['product'].currentValue) {
      this.openModal(this.product);
    }
  }

  openModal(product): void {
    // Use jQuery to open the Bootstrap modal
    if (typeof jQuery !== 'undefined') {
      jQuery('#' + this.product.modal).modal('show');
    }
  }

  loadCursos(){
    this.cursoService.getCursos().subscribe(
      res =>{
        this.products = res;
        error => this.error = error
        // console.log(this.products);
      }
    );
  }

  getVideoIframe(url) {
    let video: any[];
    let results: any[];

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

  onModalClose(): void {
    // This method can be used to perform cleanup when modal closes
  }

}

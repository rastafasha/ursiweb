import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.css'],
    standalone: false
})
export class CursoComponent implements OnInit {
  isLoading: boolean = false;
  curso: Curso;
  currentSlug!:string | null;
  slug:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService,
     private _sanitizer: DomSanitizer,
     private messageService: MessageService,
     public translate: TranslateService
     
  ) { }

  ngOnInit() {

    window.scrollTo(0, 0);
    // this.activatedRoute.params.subscribe( ({slug}) => this.getPost(slug));
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');

    this.slug = slug;
    this.isLoading = true;
    this.cursoService.getCursoBySlug(this.slug).subscribe(
      res => {
        this.curso = res[0];
        // console.log(this.curso);
        this.isLoading = false;
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

addToCart(): void{
  console.log('sending...')
  this.messageService.sendMessage(this.curso);
}
}

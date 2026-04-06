import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { environment } from '../../../../environments/environment';

const baseUrl = environment.apiUrl;
const mediaUrl = environment.apiUrlMedia;


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  standalone: false
})
export class BlogDetailComponent implements OnInit {

  post: Post;
  currentSlug!: string | null;
  slug: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: PostService,
    public translate: TranslateService,
  ) { }
  ß
  ngOnInit() {

    window.scrollTo(0, 0);
    // this.activatedRoute.params.subscribe( ({slug}) => this.getPost(slug));
    // const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.activatedRoute.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.slug = slug;
      this.blogService.getPostBySlug(this.slug).subscribe(
        res => {
          this.post = res[0];
        }
      );
    });



  }


}

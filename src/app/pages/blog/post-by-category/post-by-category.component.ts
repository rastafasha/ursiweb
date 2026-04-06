import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Category } from '../../../models/category';
import { Post } from '../../../models/post';
import { CategoryService } from '../../../services/category.service';
import { PostService } from '../../../services/post.service';

@Component({
    selector: 'app-post-by-category',
    templateUrl: './post-by-category.component.html',
    styleUrls: ['./post-by-category.component.css'],
    standalone: false
})
export class PostByCategoryComponent implements OnInit{

  isLoading: boolean = false;
  posts: Post;
  category:Category;
  error:string;
  id:number;
  category_id:number;
  name:any;

  constructor(
    public blogService: PostService,
    public categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({id}) => this.getPosts(id));
    this.activatedRoute.params.subscribe( ({id}) => this.getCategory(id));
    // this.activatedRoute.params.subscribe( ({name}) => this.getCategoria(name));

    // const name = this.activatedRoute.snapshot.paramMap.get('name');



  }

  getPosts(id): void {
    this.isLoading = true;
    this.blogService.getPostByCategory(id).subscribe(
      res =>{
        this.posts = res;
        error => this.error = error
        this.isLoading = false;
      }
    );
  }

  getCategory(id): void {
    this.categoryService.getCategory(id).subscribe(
      res =>{
        this.category = res;
        error => this.error = error
        // console.log(this.category);
      }
    );
  }



}

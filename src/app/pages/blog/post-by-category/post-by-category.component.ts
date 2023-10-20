import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Category } from 'src/app/models/category';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-post-by-category',
  templateUrl: './post-by-category.component.html',
  styleUrls: ['./post-by-category.component.css']
})
export class PostByCategoryComponent implements OnInit{

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
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.activatedRoute.params.subscribe( ({id}) => this.getPosts(id));
    this.activatedRoute.params.subscribe( ({id}) => this.getCategory(id));
    // this.activatedRoute.params.subscribe( ({name}) => this.getCategoria(name));

    // const name = this.activatedRoute.snapshot.paramMap.get('name');



  }

  getPosts(id): void {
    this.blogService.getPostByCategory(id).subscribe(
      res =>{
        this.posts = res;
        error => this.error = error
        console.log(this.posts);
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

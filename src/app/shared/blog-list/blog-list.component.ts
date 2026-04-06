import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css'],
    standalone: false
})
export class BlogListComponent implements OnInit{

  postrecientes: Post;
  error:string;

  constructor(
    public blogService: PostService
  ){}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getRecentPosts().subscribe(
      res =>{
        this.postrecientes = res;
        error => this.error = error
        console.log(this.postrecientes);
      }
    );

  }
}

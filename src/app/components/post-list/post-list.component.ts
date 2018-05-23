import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { Post } from '../../post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  public posts = [];


  constructor(private postService: PostService) {  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => this.posts = data.posts);
  }



}

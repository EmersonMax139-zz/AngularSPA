import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public posts = [];

  constructor(private postService: PostService ) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => this.posts = data);
  }

}

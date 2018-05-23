import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { Post } from '../../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  post: any = {};


  constructor(private postService: PostService) {

  }

  ngOnInit() {

  }

  





}

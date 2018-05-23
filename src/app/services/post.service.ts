import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost:8081/posts';

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }


  constructor( private http: HttpClient,
  private postService: PostService ) { }

}

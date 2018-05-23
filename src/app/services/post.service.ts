import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost:8081/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  

  constructor( private http: HttpClient,
  private postService: PostService ) { }

}

import { Injectable } from '@angular/core';
import { blogs } from './blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}

  getBlogs() {
    return blogs;
  }
}

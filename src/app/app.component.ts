import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListsComponent } from './components/post-lists/post-lists.component';
import { IPost } from '../types/posts';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from './components/UI/my-button/my-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MyButtonComponent, PostFormComponent, PostListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: IPost[];
  filteredPosts: IPost[];
  isLoading: boolean = true;
  pageCount: number[];
  isActive = true
  pageNumber = 1

  constructor(){
    this.posts = [];
    this.filteredPosts = [];
    this.pageCount = []
  }

  getPage(number: number){
    this.pageNumber = number + 1,
    this.filteredPosts = this.posts.splice(10 * this.pageNumber, 10)
    console.log(this.filteredPosts)
  }

  async ngOnInit() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.posts = await res.json();
      this.filteredPosts = [...this.posts].splice(10 * this.pageNumber, 10);
      this.pageCount = Array(Math.ceil(this.posts.length/10)).map((x,i)=>i) 
    } catch (error) {
      console.log(error)
    } finally {
      this.isLoading = false
    }
  }
  
  onAdd(post: IPost){
    this.posts.push({id: uuidv4(), title: post.title, body: post.body}) 
    this.filteredPosts = [...this.posts] 
  }

  onFilter(posts: IPost[]){
    this.filteredPosts = posts;
  }

  updatePosts(posts: IPost[]){
    this.filteredPosts = [...posts] 
  }
}
